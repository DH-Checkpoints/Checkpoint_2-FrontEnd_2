//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'


const createUser = (props) => {

  let requestHeader = {
    Accept: 'Application/json',
    'Content-Type': 'application/json'
  }

  let requestPostConfiguration = {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify(props)
  }

  fetch(`${BASE_URL}/users`, requestPostConfiguration).then(response => {
    response.json().then(info => {
      if (response.ok) {
        console.log('foi, agora se vira')
      } else {
        if (info === 'El usuario ya se encuentra registrado') {
          alert('ta errado aí irmão')
        }
      }
    })
  }) 

}

export default createUser;