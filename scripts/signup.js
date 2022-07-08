//------------------------------------------- IMPORTAÇÕES
//Importando a função de criar usuaŕios
import createUSer from './requisicoes/createUser.js'
//importando função para limpar os campos
import { limparValorDeObjetos } from '../constants/limparCampos.js'
//importando o loading
import { loading } from '../constants/loading.js'
//importando função para formatar o nome e sobrenome
import primeiraEmMaiusculo from '../constants/formatName.js'
//importando a função para mostrar a senha
import verSenha from '../constants/mostrarSenha.js'

//------------------------------------------- VARIÁVEIS LOCAIS


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

//------------------------------------------- INÍCIO FUNÇÃO PARA CONTROLAR OS DADOS


const signup = () => {

  for (let control of formControlsElements) {
    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {
      let inputValid = event.target.checkValidity()
      //Armazenando o valor a propriedade no objeto
      let inputValue = event.target.value

      if (inputValid) {
        // Removendo os espaços antes e depois com o metodo trim()
        formValidation[event.target.id] = inputValue.trim()

        // Formatando o nome 
        formValidation.firstName = primeiraEmMaiusculo(formValidation.firstName)
        formValidation.lastName = primeiraEmMaiusculo(formValidation.lastName)

        control.classList.remove('error')
      } else {
        createUserButtonElement.disabled = true
        control.classList.add('error')
      }
        //Comparação dos valores inseridos nos inputs.
      if (controlInputElement.id === 'passwordConfirm') {
        if (controlInputElement.value != formValidation['password']) {
          control.classList.add('error')
          createUserButtonElement.disabled = true
        } else {
          createUserButtonElement.disabled = false
          createUserButtonElement.focus()
        }
      }
    })
  }
  //função para mostrar a senha
  verSenha()



  //------------------------------------------- EVENTO DE CLIQUE NO BOTÃO

  createUserButtonElement.addEventListener('click', event => {
    event.preventDefault()

    // Para verificar se todos os valores estao true/Válido
    let formValid = Object.values(formValidation).every(Boolean)

    //Inicia o login, e após a requisição for conclída, é removido
    loading()

    if (formValid) {
      // Guardando o email em caixa baixa:
      formValidation.email = formValidation.email.toLowerCase()

      // Salvando o e-mail no localStorage
      localStorage.setItem('nome', formValidation.firstName)
      localStorage.setItem('email', formValidation.email)

      //Enviando os dados para a requisição criar o usuário
      createUSer(formValidation, createUserButtonElement)

      //Função para limpar os campos e o objeto
      limparValorDeObjetos(formControlsElements, formValidation)
    }
  })
}

export default signup
