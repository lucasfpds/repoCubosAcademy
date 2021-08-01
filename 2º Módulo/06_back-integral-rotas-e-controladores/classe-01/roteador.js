const express = require('express');

const imoveis = require('./controladores/imoveis')

const roteador = express();


roteador.get('/', imoveis.mostrarImoveis);
roteador.get('/:idImovel', imoveis.buscarImoveis);

module.exports = roteador;