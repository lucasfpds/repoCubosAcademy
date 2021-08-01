const express = require('express');
const alunos = require('./controladores/alunos')

const roteador = express();

roteador.get('/alunos', alunos.buscar);
roteador.get('/alunos/:idAluno', alunos.buscarAluno);
roteador.post('/alunos', alunos.adicionar);
roteador.delete('/alunos/:idAluno', alunos.deletar);
roteador.put('/alunos/:idAluno', alunos.substituirAluno)
roteador.patch('/alunos/:idAluno', alunos.substituirDado)

module.exports = roteador;