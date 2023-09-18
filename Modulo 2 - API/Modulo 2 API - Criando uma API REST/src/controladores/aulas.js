let { identificadorAula, instrutores, aulas } = require('../bandoDeDados');

const cadastrarAulas = (requisicao, resposta) => {
  const { idInstrutor } = requisicao.params;
  const { titulo, descricao } = require.body;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id = Number(idInstrutor);
  });

  if (!instrutor) {
    return resposta.status(404).json({ mensagem: 'Instrutor não encontrado.' })
  }

  const aula = {
    id: identificadoraAula++,
    instrutor_id: Number(idInstrutor),
    titulo,
    descricao
  }

  aulas.push(aula);
  return resposta.status(201).json(aula);

};

module.exports = {
  cadastrarAulas
}