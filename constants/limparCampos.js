//Função para limpar os campos dos objetos, utilizados para limpar formulários e formulários
//1º parãmetro recebe a referencia dos inputs, 2º parâmetro recebe o objeto que será limpo



export const limparValorDeObjetos = (inputParaSerLimpo, objetoParaSerLimpo = '') => {
  //Para limpar os campos
  for (let control of inputParaSerLimpo) {
    const controlInputElement = control.children[1]
    controlInputElement.value = ''
  }

  //Para limpar o objeto
  Object.keys(objetoParaSerLimpo).forEach(valor => {
    objetoParaSerLimpo[valor] = false
  })

}
