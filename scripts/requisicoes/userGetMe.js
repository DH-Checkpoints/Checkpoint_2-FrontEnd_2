import requestHeader from '../../constants/headerRequest.js'
import { BASE_URL } from '../../constants/base_url.js'

const token = localStorage.getItem('token')




const nomeUsuarioElement = document.querySelector('#nome-usuario')

console.log(nomeUsuarioElement)

const userGetMe = () => {
  let requestConfiguration = {
    method: 'GET',
    headers: {
      ...requestHeader,
      authorization: token
    }
  }

  fetch(`${BASE_URL}/users/getMe`, requestConfiguration).then(response => {
    response.json().then(data => {
      console.log(data)
      nomeUsuarioElement.innerHTML = `${data.firstName}`
    })
  })
}

export default userGetMe
