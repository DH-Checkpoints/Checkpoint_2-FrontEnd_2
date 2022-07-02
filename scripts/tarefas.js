import userGetMe from './requisicoes/userGetMe.js'

const token = localStorage.getItem('token')

const bodyHtmlElement = document.body

const tarefas = () => {
  if (token === null) {
// Caso o usuario tente acessar a página de tarefas sem fazer o login
// Será criada as propridades abaixo.
// A estilização foi feita no css de tarefas

    bodyHtmlElement.innerHTML = `
    
    <div class="teste">
    <div class='content'>
    <!--
     
    <h1>Opa opa!</h1>
     <h3>Faltou fazer o login!</h3>

     <button> <a href="../index.html"> Fazer login </a> </button> 
     
     -->
     </div>
    </div>    
    `
  }

  bodyHtmlElement.addEventListener('keyup', event =>{
    if(event.key == 'Enter'){
      window.location.href =  '../index.html'
      
    }
  })

  userGetMe()
}

export default tarefas
