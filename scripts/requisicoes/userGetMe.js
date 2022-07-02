import requestHeader from '../../constants/headerRequest.js'
import { BASE_URL } from '../../constants/base_url.js'

const token = localStorage.getItem('token')

const nomeUsuarioElement = document.querySelector('#nome-usuario')
const fotoUsuarioElement = document.querySelector('#nome-image')

const userGetMe = () => {
  
  let requestConfiguration = {
    method: 'GET',
    headers: {
      ...requestHeader,
      authorization: token
    },
  }

  fetch(`${BASE_URL}/users/getMe`, requestConfiguration).then(response => {
    response.json().then(data => {

      const firstName = data.firstName[0].toUpperCase()
      const lastName = data.lastName[0].toUpperCase()
      
      nomeUsuarioElement.innerHTML = `${data.firstName}`

      fotoUsuarioElement.innerHTML = `${firstName}${lastName}`
    })
  })
}




export default userGetMe
