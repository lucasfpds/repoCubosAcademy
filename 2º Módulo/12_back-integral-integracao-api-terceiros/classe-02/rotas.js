const express = require("express");
const pedidos = require("./controladores/pedidos");

const rotas = express();

rotas.get("/votacao/:pais/:ip", pedidos.consultar);

module.exports = {
  rotas,
};
