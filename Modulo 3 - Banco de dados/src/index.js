// segundo passo: instalar as dependencias como express
// quinto passo: exportar o arquivo Rotas para que seja testado

const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3003);


// const express = require('express');
// const pool = require('./conexao');
// const rota = require('./rotas/rotas');

// const app = express();
// const porta = 3000;

// app.use(express.json());
// app.use(rota);

// app.listen(porta, () => {
//   console.log(`O servidor está sendo executado na porta ${porta}.`);
