const express = require("express");
const rotas = express();

const filtroLogin = require("./filtros/filtroLogin");
const { login } = require("./controladores/autenticacao");
const {
  cadastrarUsuario,
  obterPerfil,
  atualizarPerfilUsuario,
} = require("./controladores/usuarios");

rotas.post("/usuarios", cadastrarUsuario);

rotas.post("/login", login);

rotas.use(filtroLogin);

rotas.get("/perfil", obterPerfil);

rotas.put("/perfil", atualizarPerfilUsuario);

module.exports = rotas;
