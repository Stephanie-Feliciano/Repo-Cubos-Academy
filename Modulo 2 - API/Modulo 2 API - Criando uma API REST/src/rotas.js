const express = require('express');
const instrutores = require('./controladores/instrutores');
const aulas = require('./controladores/aulas');

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutores);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);

rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAulas);
rotas.get('/aulas', aulas.listarAulas);
rotas.get('/aulas/:id', aulas.obterAulas);
rotas.get('/aulas/:idInstrutor/instrutores', aulas.obterAulasInstrutor);

module.exports = rotas;