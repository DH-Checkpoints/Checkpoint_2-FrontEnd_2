import loginUser from './requisicoes/loginUser.js'

// Selecionando o botão para fazer login
const loginUserButtonElement = document.querySelector('#loginUserButton')


// Dado mocado para realizar teste de login. Esse usuário e senha foram cadastrados. 

let objetoUsuario = {
  email: '123@ab.com',
  password: '12345678'
}


const index = () => {

  loginUserButtonElement.addEventListener('click', event => {
    event.preventDefault()

    loginUser(objetoUsuario);

  })
}

export default index

