//------------------------------------------- IMPORTAÇÕES
//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'
//Importando cabeçaho para API
import requestHeader from '../../constants/headerRequest.js'

import getTasks from './getTasks.js'

//------------------------------------------- VARIÁVEIS LOCAIS
//Pegando o token do localStorage
const token = localStorage.getItem('token')

//------------------------------------------- INÍCIO DA FUNÇÃO
const postTasks = novaTarefa => {
  let requestConfiguration = {
    method: 'POST',
    headers: {
      ...requestHeader,
      authorization: token
    },
    body: JSON.stringify(novaTarefa)
  }

  fetch(`${BASE_URL}/tasks`, requestConfiguration).then(response => {
    response.json().then(novaTask => {
   
      if (response.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Nova tarefa criada',
          showConfirmButton: false,
          timer: 500
        })
        console.log(`
        ${novaTask}
        ${response.statusText}`)
        getTasks()
      }

      if (response.status === 400) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Alguma informação requerida está incompleta',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(`
        ${novaTask}
        ${response.statusText}`)
      }

      if (response.status === 401) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Requer autorização para esta ação',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(`
        ${novaTask}
        ${response.statusText}`)
      }

      if (response.status >= 500) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Estamos com problemas no servidor.',
          text: 'Desculpe o transtorno. Tente novamente em instantes.'
        })
        console.log(`
        ${novaTask}
        ${response.statusText}`)
      }
    })
  })
}

export default postTasks

