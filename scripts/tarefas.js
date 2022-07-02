import userGetMe from "./requisicoes/userGetMe.js"

const token = localStorage.getItem('token')




const tarefas = () => {
  
  if(token === null){
  
    alert('tem algo errado aqui')
    window.location = '/index.html'
    
  }

  userGetMe()

}

export default tarefas
