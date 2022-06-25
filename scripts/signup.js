//Importando a função de criar usuaŕios
import createUSer from './requisicoes/createUser.js'

// Selecionando as divs que contém a classe form-control
const formControlsElements = document.querySelectorAll('.form-control')

// Selecionando o botão para criar novo usuário
const createUserButtonElement = document.querySelector('#createUserButton')

// Selecionando os inputs de senha para fazer comparação de igualdade
const userPasswordElement = document.querySelector('#password')
const userPasswordConfirmElement = document.getElementById('passwordConfirm')

// Objeto para armazenar os dados dos inputs
var formValidation = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  passwordConfirm: false
}

const signup = () => {


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
    })
  }

  /// Add um escutador de evento ao passwordConfirm -
  // Tem a opção do 'blur', que é para o momento em que o campo do input deixar de estar selecionado, no caso cliacar fora ou precionar o tab
  userPasswordConfirmElement.addEventListener('keyup', event => {
    //Verificando se os campos são diferentes
    let verificacao =
      userPasswordElement.value !== userPasswordConfirmElement.value
    if (verificacao) {
      //Se forem diferentes, adiciono a classe error no passwordConfirm
      formControlsElements[4].classList.add('error')
      // Setando o atributo como false para impedir de prosseguir no clique do botao
      formValidation[event.target.id] = false
    }
  })

  ///// EVENTO DE CLIQUE NO BOTÃO
 
  createUserButtonElement.addEventListener('click', event => {
    event.preventDefault()

    // Para verificar se todos os valores estao true/Válido
    let formValid = Object.values(formValidation).every(Boolean)

    if (formValid) {
      // window.location = './pages/login.html'
      
      createUSer(formValidation);
    } else {
      console.log('Algo de errado não está certo')
    }
  })
}

export default signup


/* 
      // inicia loading
      try {
      } catch(err) {
        // mostra erro pro usuario
      } finally {
        // retira loading
      } */