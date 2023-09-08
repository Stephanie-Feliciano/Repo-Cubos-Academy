const express = require('express');

const app = express();

// app.get('/', (requisicao, resposta) => {
//   resposta.send('Olá pessoa, esse é meu primeiro servidor com o express.')
// });

// app.listen(3000);

// utilizando a palavra 'home' no caminho para verificar comportamento.

app.get('/home', (requisicao, resposta) => {
  resposta.send('Olá pessoa, esse é meu primeiro servidor com o express.')
});

app.listen(3000);