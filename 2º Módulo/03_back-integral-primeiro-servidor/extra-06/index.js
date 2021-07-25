const express = require('express');

const app = express();


app.get('/', (req, res) =>{

    res.send('Tempo atual do cronômetro: 01 minutos e 07 segundos!')

});


app.get('/iniciar', (req, res) =>{

res.send('Cronômetro iniciado!')


});


app.get('/pausar', (req, res) =>{

    res.send('Cronômetro pausado!')

});


app.get('/continuar', (req, res) =>{

    res.send('Cronômetro continuando!')

});

app.get('/zerar', (req, res) =>{

    res.send('Cronômetro zerado!')

});


app.listen(8000)