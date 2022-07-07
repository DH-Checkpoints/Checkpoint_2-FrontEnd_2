//------------------------------------------- IMPORTAÇÕES
//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'
//Importando cabeçaho para API
import requestHeader from '../../constants/headerRequest.js'

//------------------------------------------- VARIÁVEIS LOCAIS
const token = localStorage.getItem('token')

const deleteTask = idTask => {
  let requestConfiguration = {
    method: 'DELETE',
    headers: {
      ...requestHeader,
      authorization: token,
    }
  }


  fetch(`${BASE_URL}/tasks/${idTask}`, requestConfiguration).then(response => {
    response.json().then(deleteTask => {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )    
         
      console.log(deleteTask)
    })
  }) 




}

export default deleteTask
