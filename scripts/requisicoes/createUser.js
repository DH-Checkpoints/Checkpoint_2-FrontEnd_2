//------------------------------------------- IMPORTAÇÕES
//Importando a URL da api
import { BASE_URL } from '../../constants/base_url.js'
//Importando cabeçaho para API
import requestHeader from '../../constants/headerRequest.js'
// IMportando o loading 
import { loading } from '../../constants/loading.js'


//------------------------------------------- INÍCIO FUNÇÃO PARA CONTROLAR E ENVIAR OS DADOS PARA A API
const createUser = (dadosObjetoUsuario, botaoCriaUsuario) => {

  let requestConfiguration = {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify(dadosObjetoUsuario)
  }

  fetch(`${BASE_URL}/users`, requestConfiguration).then(response => {
    response.json().then(info => {
      loading()
      if (response.ok) {
        Swal.fire({
          title: 'Usuário cadastrado com sucesso',
          text: 'Bora começar a criar suas tarefas?',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3cc45e',
          cancelButtonColor: '#F9806F',
          confirmButtonText: 'Sim      😃',
          cancelButtonText: 'Não   (criar novo usuário)    😃'
        }).then(result => {
          if (result.isConfirmed) {
            //Condiçõ para o usuário ir diretamente para as tarefas
            localStorage.setItem('token', info.jwt)
            window.location = '/tarefas.html'
          }
          else{
            window.location.reload()
          }
        })

      } else {
        if (info === 'El usuario ya se encuentra registrado') {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Usuário já cadastrado!'
          })
          botaoCriaUsuario.disabled = true
        }
      }
    })
  })
}

export default createUser
