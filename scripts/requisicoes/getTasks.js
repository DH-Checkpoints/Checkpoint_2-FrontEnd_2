//------------------------------------------- IMPORTAÇÕES
//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'
//Importando cabeçaho para API
import requestHeader from '../../constants/headerRequest.js'
import deleteTask from './deleteTask.js'

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

        tarefasPendentesElements.innerHTML += `
        <li class="tarefa">
          <div class="not-done"></div>
            <div class="descricao" >
                <p class="nome" >${task.description}</p>
                <p class="timestamp">${dataFormatada}</p>
                <button  data-id="${task.id}" class="deleteTaskButton">del</button>
            </div>
        </li> 
        `
      }
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
