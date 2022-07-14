//------------------------------------------- IMPORTAÇÕES
import { BASE_URL } from '../../constants/base_url.js'
import requestHeader from '../../constants/headerRequest.js'

//------------------------------------------- VARIÁVEIS LOCAIS
const token = localStorage.getItem('token')

const deleteTask = idTask => {
  let requestConfiguration = {
    method: 'DELETE',
    headers: {
      ...requestHeader,
      authorization: token
    }
  }

  fetch(`${BASE_URL}/tasks/${idTask}`, requestConfiguration).then(response => {
    response.json().then(del => {
      if (response.ok) {
        Swal.fire(
          'Tarefa excluída!',
          'A tarefa foi ecluída com sucesso.',
          'success'
        )
      }

      if (response.status === 500) {
        Swal.fire(
          'Erro',
          'Não foi possível deletar, erro no servidor.',
          'error'
        )
      }
    })
  })
}

export default deleteTask
