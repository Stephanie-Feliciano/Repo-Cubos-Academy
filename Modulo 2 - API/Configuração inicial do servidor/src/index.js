const express = require('express');

// importando funções do arquivo Controladores

const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/Controladores.js');

const app = express();

//Intermediário independente

const primeiroIntermediario = (requisicao, resposta, proximo) => {
  console.log('Passei no primeiro intermediário');
  resposta.send('Algo deu errado - isto é apenas um teste');
  proximo();
};

const segundoIntermediario = (requisicao, resposta, proximo) => {
  console.log('Passei no segundo intermediário');
  proximo();
};

app.use(primeiroIntermediario);
app.use(segundoIntermediario);

//Curiosidade: inserindo a URL http://localhost:3000/professores?nome=Teste2 seguido por SEND, o VSCODE irá printar a informação solicitada.

// URL: localhost:3000/professores;
app.get('/professores', filtrarProfessores);

// URL: localhost:3000/professores/3;
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);

console.log('ta rodando')




