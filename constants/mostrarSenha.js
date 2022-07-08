// Selecionando botão para mostrar a senha
const viewPasswordElement = document.querySelectorAll('#viewPassword')

const passwordControlElement = document.querySelectorAll('#password-control')

const verSenha = () =>{
 for(let passwordControl of passwordControlElement){
    const mostraSenha = passwordControl.children[1]
    for(let viewPasswordcontrol of viewPasswordElement){
    viewPasswordcontrol.addEventListener('click', event =>{
      if(mostraSenha.type === 'password'){
        mostraSenha.type = 'text'
        viewPasswordcontrol.src = './../assets/olho-aberto.png'
      }
      else{
        mostraSenha.type = 'password'
        viewPasswordcontrol.src = './../assets/olho-fechado.png'
      }
    })
}
    console.log(mostraSenha)
  } 
}
export default verSenha