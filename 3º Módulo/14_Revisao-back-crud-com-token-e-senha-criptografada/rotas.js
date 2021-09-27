const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const postagens = require('./controladores/postagens');
const verificaLogin = require('./filtros/verificaLogin');
// const autores = require('./controladores/autores');
// const livros = require('./controladores/livros');
// const emprestimos = require('./controladores/emprestimos');

const rotas = express();

//usuarios
rotas.get('/usuarios', usuarios.listarUsuarios);
// rotas.get('/usuarios/:id', usuarios.obterUsuario);
rotas.post('/usuarios', usuarios.cadastrarUsuario);
// rotas.put('/usuarios/:id', usuarios.atualizarUsuario);
// rotas.delete('/usuarios/:id', usuarios.excluirUsuario);

// Login
rotas.post('/login', login.login);

//Postagens
rotas.get('/',postagens.listarPostagem);

rotas.use(verificaLogin);
rotas.post('/postagens', postagens.cadastrarPostagem);
rotas.patch('/postagens/:id',postagens.atualizarPostagem);
rotas.get('/postagens',postagens.postagensUsuario);
// rotas.get('/livros/:id',livros.obterLivro);
rotas.delete('/postagens/:id',postagens.excluirPostagem);




module.exports = rotas;