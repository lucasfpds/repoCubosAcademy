const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express');

const app = express();

let i = 0

app.get('/', (req, res) =>{

    res.send('É a vez de ' + jogadores[i] + ' jogar!')

    i === jogadores.length-1 ? i = 0 : i += 1
});


app.get('/remover', (req, res) =>{
const index = Number(req.query.indice)

 if(jogadores[index] == undefined){
     res.send('Não existe jogador no índice informado ('+index+') para ser removido.')
} else {
jogadores.splice(index,1)
res.send(jogadores)
}

});


app.get('/adicionar', (req, res) =>{
    const index = Number(req.query.indice);
    
    const queryNome = req.query.nome;
    const nome = queryNome[0].toUpperCase() + queryNome.substr(1)

 if(req.query.indice == undefined){
     
    jogadores.push(nome)

    } else if (jogadores[index] == undefined){

        res.send('O índice informado ('+index+') não existe no array. Novo jogador não adicionado.')

    } else {
      jogadores.splice(index,0,nome)
    }

    res.send(jogadores)
});



app.listen(8000)