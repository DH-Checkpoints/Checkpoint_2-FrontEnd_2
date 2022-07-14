//------------------------------------------- importações
import { BASE_URL } from '../../constants/base_url.js'
import requestHeader from '../../constants/headerRequest.js'
import getTasks from './getTasks.js'

//------------------------------------------- variáveis locais
const token = localStorage.getItem('token')

//------------------------------------------- início da função
const alterTasks = (id, completed) => {
  console.log(completed)

  const isCompleted = completed === 'true'

  let requestConfiguration = {
    method: 'PUT',
    headers: {
      ...requestHeader,
      authorization: token
    },
    body: JSON.stringify({ completed: !isCompleted })
  }

  fetch(`${BASE_URL}/tasks/${id}`, requestConfiguration).then(response => {
    response.json().then(task => {
      getTasks()
    })
  })
}

export default alterTasks
