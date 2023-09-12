const validarSenha = (requisicao, resposta, proximo) => {
  const { senha } = requisicao.query;

  if (!senha) {
    return resposta.send('A senha não foi informada');
  }

  if (senha != 'carros123') {
    return resposta.send('A senha esta incorreta');
  }

  proximo();

}

module.exports = {
  validarSenha
}