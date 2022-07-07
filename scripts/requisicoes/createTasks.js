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
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Nova tarefa criada',
        showConfirmButton: false,
        timer: 500
      })
      getTasks()
      
    })
  }) 
}

export default postTasks
