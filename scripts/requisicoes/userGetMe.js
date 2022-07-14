//------------------------------------------- Importações
import requestHeader from '../../constants/headerRequest.js'
import { BASE_URL } from '../../constants/base_url.js'

//------------------------------------------- variáveis locais
const token = localStorage.getItem('token')
const nomeUsuarioElement = document.querySelector('#nome-usuario')
const fotoUsuarioElement = document.querySelector('#nome-image')

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
      localStorage.setItem('nome', data.firstName)
      localStorage.setItem('sobrenome', data.lastName)
      localStorage.setItem('email', data.email)
      localStorage.setItem('id', data.id)

      nomeUsuarioElement.innerHTML = `${data.firstName} ${data.lastName}`

      fotoUsuarioElement.innerHTML = `<img src= "https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90
      )}.jpg" alt="">`
    })
  })
}

export default userGetMe
