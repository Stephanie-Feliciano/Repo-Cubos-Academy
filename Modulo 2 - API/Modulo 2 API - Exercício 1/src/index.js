const express = require('express');
const { listagemCarros, obterCarros } = require('./controladores/funcaoCarros');
const { validarSenha } = require('./intermediarios');

const app = express();

app.use(validarSenha);

app.get('/carros', listagemCarros);
app.get('/carros', obterCarros);

console.log('tá rodando')

app.listen(3000);