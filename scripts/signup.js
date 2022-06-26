//Importando a função de criar usuaŕios
import createUSer from './requisicoes/createUser.js'

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

// const signup = () => {
function signup(){

  for (let control of formControlsElements) {
    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {
      let inputValid = event.target.checkValidity()
      let inputValue = event.target.value

      if (inputValid) {
        formValidation[event.target.id] = inputValue
      }

      if (inputValid) {
        control.classList.remove('error')
      } else {
        control.classList.add('error')
      }

      if(controlInputElement.id ==='passwordConfirm'){
        if(controlInputElement.value != formValidation['password']){
          control.classList.add('error')
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
    localStorage.setItem('E-mail', formValidation.email)
      createUSer(formValidation)

      window.location = '/index.html'
    } else {
      console.log('Algo de errado não está certo')
    }
  })
}

export default signup();

