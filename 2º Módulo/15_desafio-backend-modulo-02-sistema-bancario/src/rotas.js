const express = require('express');
const pedidos = require('../controladores/pedidos')

const rotas = express();

rotas.get('/contas', pedidos.consultar)
rotas.post('/contas', pedidos.criarConta)
rotas.put('/contas/:numeroConta/usuario', pedidos.alterarConta)
rotas.delete('/contas/:numeroConta', pedidos.cancelarConta)
rotas.post('/transacoes/depositar', pedidos.depositar)
rotas.post('/transacoes/sacar', pedidos.sacar)
rotas.post('/transacoes/transferir', pedidos.transferir)
rotas.get('/contas/saldo', pedidos.saldo)
rotas.get('/contas/extrato', pedidos.extrato)



module.exports = {
    rotas
}