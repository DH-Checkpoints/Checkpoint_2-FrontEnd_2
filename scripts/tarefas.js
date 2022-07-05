  //------------------------------------------- IMPORTAÇÕES
import userGetMe from './requisicoes/userGetMe.js'

//------------------------------------------- VARIÁVEIS LOCAIS

const token = localStorage.getItem('token')

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
}

export default tarefas
