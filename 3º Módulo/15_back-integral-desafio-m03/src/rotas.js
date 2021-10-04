const express = require("express");
const usuarios = require("./controladores/usuarios");
const login = require("./controladores/login");
const verificaLogin = require("./filtro/verificaLogin");
const produtos = require('./controladores/produtos');
const swaggerUi = require('swagger-ui-express');
// const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();
rotas.use("/docs", swaggerUi.serve, swaggerUi.setup(require("../swagger.json")))


// CADASTRAR USUARIO
rotas.post("/usuario", usuarios.registerUser);

// LOGIN DO USUARIO
rotas.post("/login", login.userLogin);

// VERIFICAÇÃO DE LOGIN E REGISTRO DE TOKEN
rotas.use(verificaLogin)

// PERFIL DO USUARIO
rotas.get("/usuario", usuarios.userData);
rotas.put("/usuario", usuarios.updateUser);

//PRODUTOS
rotas.post("/produtos", produtos.registerProduct);
rotas.get("/produtos", produtos.findAllProducts);
rotas.get("/produtos/:id", produtos.findProduct);
rotas.put("/produtos/:id", produtos.updateProduct);
rotas.delete("/produtos/:id", produtos.deleteProduct);


module.exports = rotas;
