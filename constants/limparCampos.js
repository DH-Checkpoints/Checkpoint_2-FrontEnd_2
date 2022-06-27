//Função para limpar os campos dos objetos, utilizados para limpar formulários e formulários
//1º parãmetro recebe a referencia dos inputs, 2º parâmetro recebe o objeto que será limpo



export const limparValorDeObjetos = (inputElement, chave) => {
  //Para limpar os campos
  for (let control of inputElement) {
    const controlInputElement = control.children[1]
    controlInputElement.value = ''
  }

  //Para limpar o objeto
  Object.keys(chave).forEach(valor => {
    chave[valor] = ''
  })




}
