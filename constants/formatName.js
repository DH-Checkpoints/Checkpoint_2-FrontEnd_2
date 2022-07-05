//-------------------------------- Função para formatar o nome inserido no cadastro.
// A ideia é manter apenas a primeira letra em maiúsculo e em sequencia o nome
// utilizei o método substring() para retornar a strind a partir de uma posição
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring

const primeiraEmMaiusculo = (nomeInput) =>{
  let nome = nomeInput.toLowerCase()

  nome = nome[0].toUpperCase() + nome.substring(1); 

  return nome
}

export default primeiraEmMaiusculo