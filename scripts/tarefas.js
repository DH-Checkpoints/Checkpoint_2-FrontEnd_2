//------------------------------------------- IMPORTAÇÕES
import userGetMe from './requisicoes/userGetMe.js'

//------------------------------------------- VARIÁVEIS LOCAIS

const token = localStorage.getItem('token')

// Botão de logout (sair da apliacação)
const finalizarSessao = document.querySelector('#closeApp')

//------------------------------------------- INÍCIO FUNÇÃO PARA CONTROLAR OS DADOS

const tarefas = () => {
  if (token === null) {
    // Caso o usuario tente acessar a página de tarefas sem fazer o login
    // Será criada as propridades abaixo.
    // A estilização foi feita no css de tarefas

    document.body.innerHTML = `
    
    <div class="paginaErro">
      <div class='content'>
     <!--
      <h1>Opa opa!</h1>
      <h3>Faltou fazer o login!</h3>
      <button> <a href="../index.html"> Fazer login </a> </button> 
     -->
     </div>
    </div>    
    `

    //------------------------------------------- ENVIANDO PARA A PÁGINA DE LOGIN SE TECLAR OU CLICAR
    document.body.addEventListener('click', event => {
      window.location.href = '../index.html'
    })
    document.body.addEventListener('keyup', event => {
      window.location.href = '../index.html'
    })
  }

  userGetMe()

  //------------------------------------------- LOGOUT - USUÁRIO ENCERRA O SISTEMA
  finalizarSessao.addEventListener('click', event => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true
    })

    Toast.fire({
      icon: 'success',
      title: `Tchau ${localStorage.getItem('nome')} 👋`,
      text: 'Até a próxima'
    })
    setTimeout(() => {
      localStorage.clear()
      window.location = '/index.html'
    }, 1501)
  })
}

export default tarefas
