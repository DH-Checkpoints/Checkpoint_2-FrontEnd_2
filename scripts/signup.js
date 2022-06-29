//Importando a função de criar usuaŕios
import createUSer from './requisicoes/createUser.js'
//importando função para limpar os campos
import { limparValorDeObjetos } from '../constants/limparCampos.js'

// Selecionando as divs que contém a classe form-control
const formControlsElements = document.querySelectorAll('.form-control')

// Selecionando o botão para criar novo usuário
const createUserButtonElement = document.querySelector('#createUserButton')

// Objeto para armazenar os dados dos inputs
var formValidation = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  passwordConfirm: false
}

const signup = () => {
  // function signup(){

  for (let control of formControlsElements) {
    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {
      let inputValid = event.target.checkValidity()
      let inputValue = event.target.value

      if (inputValid) {
        // Removendo os espaços antes e depois com o metodo trim()
        formValidation[event.target.id] = inputValue.trim()
      }

      if (inputValid) {
        control.classList.remove('error')
      } else {
        control.classList.add('error')
      }

      if (controlInputElement.id === 'passwordConfirm') {
        if (controlInputElement.value != formValidation['password']) {
          control.classList.add('error')
        } else {
          createUserButtonElement.disabled = false
          createUserButtonElement.focus()
        }
      }
    })
  }

  ///// EVENTO DE CLIQUE NO BOTÃO

  createUserButtonElement.addEventListener('click', event => {
    event.preventDefault()

    // Para verificar se todos os valores estao true/Válido
    let formValid = Object.values(formValidation).every(Boolean)

    if (formValid) {
      
      // Guardando o email em caixa baixa:
      formValidation.email = formValidation.email.toLowerCase()

      // Salvando o e-mail no localStorage
      localStorage.setItem('nome', formValidation.firstName)
      localStorage.setItem('email', formValidation.email)

      //Enviando os dados para a requisição criar o usuário
      createUSer(formValidation)
    }
  })
}

export default signup
