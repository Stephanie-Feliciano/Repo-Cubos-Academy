const bancoDeDados = {
  identificadorInstrutor: 3,
  identificadorAula: 2,
  instrutores: [
    {
      id: 1,
      nome: 'Teste',
      email: 'teste@teste.com',
      status: true
    },
    {
      id: 2,
      nome: 'Teste2',
      email: 'teste2@teste.com',
      status: true
    },
  ],
  aulas: [
    {
      id: 1,
      instrutor_id: 1,
      título: 'Primeiro servidor',
      descriacao: 'Construindo servidor'
    }
  ]
};


module.exports = bancoDeDados;