//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'

const createUser = props => {
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
        Swal.fire({
          title: 'Usuário cadastrado com sucesso',
          text: 'Deseja fazer o login?',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3cc45e',
          cancelButtonColor: '#F9806F',
          confirmButtonText: 'Sim      😃',
          cancelButtonText: 'Não   (criar novo usuário)    😃'
        }).then(result => {
          if (result.isConfirmed) {
            window.location = '/index.html'
            limparValorDeObjetos(formControlsElements, formValidation)
          } else {
            limparValorDeObjetos(formControlsElements, formValidation)
          }
        })

        console.log('foi, agora se vira')
      } else {
        if (info === 'El usuario ya se encuentra registrado') {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Usuário já cadastrado!'
          })
        }
      }
    })
  })
}

export default createUser
