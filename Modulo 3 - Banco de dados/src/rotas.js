// terceiro passo: criar uma rota para realizar teste
// quarto passo: voltar pra o arquivo index.js

const express = require('express');
const { cadastrarUsuarios } = require('./controladores/usuarios');

const rotas = express();

rotas.post('/usuario', cadastrarUsuarios);

module.exports = rotas;