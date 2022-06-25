//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'

const loginUser = objetoUsuario => {
  let requestHeader = {
    'Content-Type': 'application/json'
  }

  let requestPostUserConfiguration = {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify(objetoUsuario)
  }

  fetch(`${BASE_URL}/users/login`, requestPostUserConfiguration).then(
    response => {
      response.json().then(data => {
        try {          
          console.log(data)
        } 
        catch (erro) {
          alert('ta errado aí irmão')
        }
        finally{
          
        }
      })
    }
  )
}

export default loginUser
