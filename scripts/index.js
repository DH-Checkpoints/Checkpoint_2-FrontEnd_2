//------------------------------------------- IMPORTAÇÕES
import loginUser from './requisicoes/loginUser.js'
import { loading } from '../constants/loading.js'
import { limparValorDeObjetos } from '../constants/limparCampos.js'

//------------------------------------------- VARIÁVEIS LOCAIS
// Selecionando o botão para fazer login
const loginUserButtonElement = document.querySelector('#loginUserButton')
// Selecionando todos as tags com a classe form-control
const inputElement = document.querySelectorAll('.form-control')

// Para armazenar os dados que são digitados no formulário de login
let formValidationLogin = {
  email: false,
  password: false
}

//------------------------------------------- INÍCIO FUNÇÃO PARA CONTROLAR OS DADOS
const index = () => {
  for (let control of inputElement) {
    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {
      let inputValid = event.target.checkValidity()
      let inputValue = event.target.value.trim()

      if (inputValid) {
        formValidationLogin[event.target.id] = inputValue
        formValidationLogin.email = formValidationLogin.email.toLowerCase()

        control.classList.remove('error')
      } else {
        control.classList.add('error')
      }
      //Habilitando o botão após os campos estarem validados
    if(formValidationLogin.email && formValidationLogin.password){
      loginUserButtonElement.disabled = false
    }
    })
    
  }

//------------------------------------------- FUNÇÃO DE CLIQUE NO BOTÃO

  loginUserButtonElement.addEventListener('click', event => {
    event.preventDefault()
    //Iniciando o loading
    loading()
    //Enviando os dados obtidos para realizar a requisição de login
    loginUser(formValidationLogin)
    //Função para deixar os campos limpos para se caso retorne a página, os campos estejam limpos e sem cache
    limparValorDeObjetos(inputElement)
  })
}

export default index
