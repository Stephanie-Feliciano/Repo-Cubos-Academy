const express = require('express');

const app = express();

const professores = [
  { id: 1, nome: 'Teste1', stack: 'Backend teste' },
  { id: 2, nome: 'Teste2', stack: 'Backend teste2' },
  { id: 3, nome: 'Teste3', stack: 'Backend teste3' },
];


// Parâmetro de rotas

// URL: localhost:3000/professores;
app.get('/professores', (requisição, resposta) => {
  resposta.send(professores);
});

// URL: localhost:3000/professores/3;
app.get('/professores/:id', (requisição, resposta) => {
  const professorEncontrado = professores.find((professores) => {
    return professores.id === Number(requisição.params.id);
  });

  resposta.send(professorEncontrado);
});

console.log('esta rodando');
app.listen(3000);




