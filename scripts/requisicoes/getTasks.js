//------------------------------------------- IMPORTAÇÕES
import { BASE_URL } from '../../constants/base_url.js'
import requestHeader from '../../constants/headerRequest.js'
import deleteTask from './deleteTask.js'

//------------------------------------------- VARIÁVEIS LOCAIS
const token = localStorage.getItem('token')
const skeletonElements = document.querySelector('#skeleton')
const tarefasPendentesElements = document.querySelector('.tarefas-pendentes')

let requestConfiguration = {
  method: 'GET',
  headers: {
    ...requestHeader,
    authorization: token
  }
}

//------------------------------------------- INÍCIO FUNÇÃO
const getTasks = () => {
  fetch(`${BASE_URL}/tasks`, requestConfiguration).then(response => {
    response.json().then(tasks => {
      skeletonElements.style.display = 'none'

      tarefasPendentesElements.innerHTML = ''

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
                <p class="nome" >${task.description}</p>
                <p class="timestamp">${dataFormatada}</p>
                <button  data-id="${task.id}" class="deleteTaskButton">del</button>
            </div>
        </li> 
        `
        } else {
          tarefasConcluidasElements.innerHTML += `
          <li class="tarefa">
            <div class="not-done"  data-id="${task.id}" data-completed="${task.completed}"></div>
              <div class="descricao" >
                  <p class="nome" >${task.description}</p>
                  <p class="timestamp">${dataFormatada}</p>
                  <button  data-id="${task.id}" class="deleteTaskButton">del</button>
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


//------------------------------------------- BOTÃO PARA EXCLUIR TAREFA
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
              button.parentElement.parentElement.remove()
              deleteTask(button.dataset.id)
            }
          })
        })
      })
    })
  })
}

export default getTasks
