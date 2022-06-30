//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'
import { loading } from '../../constants/loading.js'

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
      console.log(response)
      response.json().then(data => {
        loading()
        if (response.status === 201) {
          console.log('Cabra existe')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tudo certo',
            showConfirmButton: false,
            timer: 1500
          })
        }
        if (response.status === 400) {
          Swal.fire(
            'Opa!',
            'Senha errada',
            'error'
          )
          console.log('Senha errada')
        }
        if (response.status === 404) {
          Swal.fire({
            title: 'Você não tem conta',
            text: "Vamos cadastrar uma?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, quero!'
          }).then((result) => {
            if (result.isConfirmed) {
              location.href = '/cadastro.html'
              
            }
          })
        }
        if (response.status === 500) {
          Swal.fire(
            'Opa!',
            'Temos um probleminha aqui!',
            'warning'
          )
          console.log('erro servidor')
        }

      })
    }
  )
}

export default loginUser

/* 

/////// informações de resposta da API
body: (…)
bodyUsed: true
headers: Headers {}
ok: true
redirected: false
status: 201
statusText: "Created"
type: "cors"
url: "https://ctd-todo-api.herokuapp.com/v1/users/login"
[[Prototype]]: Response
 */
