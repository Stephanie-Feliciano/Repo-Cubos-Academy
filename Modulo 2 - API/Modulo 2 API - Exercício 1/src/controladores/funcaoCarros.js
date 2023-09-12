const carros = require('../bancoDeDados');

const listagemCarros = (requisicao, resposta) => {
  const { marca, cor } = requisicao.query;
  let resultado = carros;

  if (marca) {
    resultado = resultado.filter((carro) => {
      return carro.marca === marca;
    });
  }

  if (cor) {
    resultado = resultado.filter((carro) => {
      return carro.cor === cor;
    });
  }

  resposta.send(resultado);
};

const obterCarros = (requisicao, resposta) => {
  const { id } = requisicao.params;

  const carroEncontrado = carros.find((carro) => {
    return carro.id === Number(id);
  });

  resposta.send(carroEncontrado);
};

module.exports = {
  listagemCarros,
  obterCarros
};