
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express');

const app = express();

let i = 0

app.get('/', (req, res) =>{

    res.send('É a vez de ' + jogadores[i] + ' jogar!')

    i === jogadores.length-1 ? i = 0 : i += 1
})

app.listen(8000)