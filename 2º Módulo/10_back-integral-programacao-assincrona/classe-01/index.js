const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req,res) =>{    
    const inicio = Number(req.query.inicio)
    const quantidade = Number(req.query.quantidade)
    const apiPoke = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    console.log(!inicio)

    if(inicio){
    apiPoke.data.results = apiPoke.data.results.slice(inicio, quantidade)
        res.json({
        resposta: apiPoke.data
        })
    } else {
        res.json({
        resposta: apiPoke.data
    });
    }
})


app.get('/pokemon/:id', async (req,res) =>{    

    let id = (req.params.id)
    const apiPoke = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    const apiPokeId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
    if(id){
        for (let i = 0; i < apiPoke.data.results.length; i++){
            if(apiPoke.data.results[i].name == id){
                id = i+1
            }
        }
    }

    res.json({
        "id": +id,
        "name": apiPokeId.data.name,
        "height": apiPokeId.data.height,
        "weight": apiPokeId.data.weight,
        "base_experience": apiPokeId.data.base_experience,
        "forms": apiPokeId.data.forms,
        "abilities": apiPokeId.data.abilities,
        "species": apiPokeId.data.species,
    })
})




app.listen(8000);