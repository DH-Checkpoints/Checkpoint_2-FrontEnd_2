//------------------------------------------- IMPORTAÇÕES
import { BASE_URL } from '../../constants/base_url.js'
import requestHeader from '../../constants/headerRequest.js'
import alterTasks from './alterTasks.js'
import deleteTask from './deleteTask.js'

//------------------------------------------- Variáveis local
const token = localStorage.getItem('token')
const skeletonElements = document.querySelector('#skeleton')
const tarefasPendentesElements = document.querySelector('.tarefas-pendentes')
const tarefasConcluidasElements = document.querySelector('.tarefas-terminadas')

let requestConfiguration = {
  method: 'GET',
  headers: {
    ...requestHeader, // Copiando os valores/referencias pra poder informar o authorization após
    authorization: token
  }
}

//------------------------------------------- Início da função para trazer as tasks
const getTasks = () => {
  fetch(`${BASE_URL}/tasks`, requestConfiguration).then(response => {
    response.json().then(tasks => {
      skeletonElements.style.display = 'none'

      //------------------------------------------- Limpando o HTML antes de inserir
      tarefasPendentesElements.innerHTML = ''
      tarefasConcluidasElements.innerHTML = ''

      //------------------------------------------- Iniciando a distribuição através do for
      for (let task of tasks) {
        const dataCreat = new Date(task.createdAt)
        const dataFormatada = dataCreat.toLocaleDateString('pt-br', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })

        if (!task.completed) {
          tarefasPendentesElements.innerHTML += `
        <li class="tarefa">
          <div class="not-done"  data-id="${task.id}" data-completed="${task.completed}"></div>
            <div class="descricao" >
            <div class="descricao-tarefa">  
            <p class="nome" >${task.description}</p>
            </div>
              <div class="right-info-control">
              <div class="buttons-control">
              <button  data-id="${task.id}" class="alterTaskButton"><img src="../../assets/alter.png"></button>
              <button  data-id="${task.id}" class="deleteTaskButton"><img src="../../assets/delete.png"></button>
              </div>
              <p class="timestamp">${dataFormatada}</p>
            </div>
          </div>
        </li> 
        `
        } else {
          tarefasConcluidasElements.innerHTML += `
        <li class="tarefa">
          <div class="not-done"  data-id="${task.id}" data-completed="${task.completed}"></div>
            <div class="descricao" >
            <div class="descricao-tarefa">  
            <p class="nome" >${task.description}</p>
            </div>
              <div class="right-info-control">
              <div class="buttons-control">
              <button  data-id="${task.id}" class="deleteTaskButton"><img src="../../assets/delete.png"></button>
              </div>
              <p class="timestamp">${dataFormatada}</p>
            </div>
          </div>
        </li> 
            `
        }
      }

      //------------------------------------------- BOTÃO PARA CONCLUIR TAREFA
      const completeTarefaCheckboxes = document.querySelectorAll('.not-done')
      completeTarefaCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', event => {
          alterTasks(event.target.dataset.id, event.target.dataset.completed)
        })
      })

      //------------------------------------------- Alterar conteúdo da tarefa
      const alterTarefaButtonElement =
        document.querySelectorAll('.alterTaskButton')

      alterTarefaButtonElement.forEach(button => {
        button.addEventListener('click', event => {
          event.preventDefault()

          Swal.fire({
            title: 'Insira sua alteração',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            showLoaderOnConfirm: true,
            preConfirm: newTask => {
              let requestConfiguration = {
                method: 'PUT',
                headers: {
                  ...requestHeader,
                  authorization: token
                },
                body: JSON.stringify({ description: newTask.toString() })
              }

              fetch(
                `${BASE_URL}/tasks/${button.dataset.id}`,
                requestConfiguration
              ).then(response => {
                if (response.ok) {
                  getTasks()
                }
              })
            }
          })
        })
      })

      //------------------------------------------- Deletar tarefa
      const deleteTarefaButtonElement =
        document.querySelectorAll('.deleteTaskButton')

      deleteTarefaButtonElement.forEach(button => {
        button.addEventListener('click', event => {
          event.preventDefault()
          Swal.fire({
            title: 'Quer mesmo deletar?',
            text: 'Não será possível recuperar!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim!',
            cancelButtonText: 'Não!'
          }).then(result => {
            if (result.isConfirmed) {
              //------------ Limpando direto no HTML, buscando os elementos que são filhos do botão clicado
              button.parentElement.parentElement.parentElement.parentElement.remove()
              //------------ Após limpo o HTML, é feito o mesmo na API
              deleteTask(button.dataset.id)
            }
          })
        })
      })
    })
  })
}

export default getTasks
