const express = require('express');
const pedidos = require('./controladores/pedidos')

const rotas = express();

rotas.get('/', pedidos.consultar)


module.exports = {
    rotas
}