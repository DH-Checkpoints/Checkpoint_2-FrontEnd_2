import loginUser from './requisicoes/loginUser.js'

import {loading} from '../constants/loading.js'
import { limparValorDeObjetos } from '../constants/limparCampos.js'


// Selecionando o botão para fazer login
const loginUserButtonElement = document.querySelector('#loginUserButton')

const inputElement = document.querySelectorAll('.form-control')

// Dado mocado para realizar teste de login. Esse usuário e senha foram cadastrados.
let formValidationLogin = {
  email: false,
  password: false
}

const index = () => {
  for (let control of inputElement) {
    const controlInputElement = control.children[1]
    
    controlInputElement.addEventListener('keyup', event => {
      let inputValid = event.target.checkValidity()
      let inputValue = event.target.value
      console.log(controlInputElement.value)

      
      if (inputValid) {
        control.classList.remove('error')
      } else {
        control.classList.add('error')
      }
      
      if (inputValid) {
        formValidationLogin[event.target.id] = inputValid
        formValidationLogin[event.target.id] = inputValue
        // Para deixar o botão ativado
        loginUserButtonElement.disabled = false
      }
    })
  }
}


loginUserButtonElement ?
loginUserButtonElement.addEventListener('click', event => {
  event.preventDefault()
  loading();
  loginUser(formValidationLogin)
  limparValorDeObjetos(inputElement)

}): ''

export default index
