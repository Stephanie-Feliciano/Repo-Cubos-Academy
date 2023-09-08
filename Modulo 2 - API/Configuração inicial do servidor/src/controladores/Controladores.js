// importando o arquivo Bano de dados

const professores = require('../bancoDeDados'); // verificar com João****************


// Funções para aplicação

const filtrarProfessores = ((requisicao, resposta) => {
  const { stack } = requisicao.query;
  let resultado = professores;

  console.log('Cheguei no controlador de listagem')

  if (stack) {
    resultado = professores.filter((professor) => {
      return professor.stack === stack;
    });
  };
  resposta.send(resultado);
});

const encontrarUmProfessor = (requisicao, resposta) => {
  const professorEncontrado = professores.find((professores) => {
    return professores.id === Number(requisicao.params.id);
  });

  resposta.send(professorEncontrado);
};


// exportando funções

module.exports = { filtrarProfessores, encontrarUmProfessor }; //exportando as funções para utilização em outra pasta/arquivo

