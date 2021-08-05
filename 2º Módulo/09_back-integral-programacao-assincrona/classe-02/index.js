const express = require('express');
const axios = require('axios');

const app = express();


const enderecos = [{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
  },
  {
    "cep": "57044-116",
    "logradouro": "Rua N",
    "complemento": "(Lot Prq Miramar)",
    "bairro": "São Jorge",
    "localidade": "Maceió",
    "uf": "AL",
    "ibge": "2704302",
    "gia": "",
    "ddd": "82",
    "siafi": "2785"
  },
  {
    "cep": "57045-310",
    "logradouro": "Rua Santa Isabel",
    "complemento": "",
    "bairro": "Barro Duro",
    "localidade": "Maceió",
    "uf": "AL",
    "ibge": "2704302",
    "gia": "",
    "ddd": "82",
    "siafi": "2785"
  }
]

app.get('/enderecos/:cep', async (req,res) =>{

    let cep = req.params.cep
    const apiEndereco = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    let newCep = ""

    for (let i = 0; i < 8;i++){
    newCep += cep[i]
    i == 4 ? newCep += '-': null ;
    }
    
    const endereco = enderecos.find((enderecos) => enderecos.cep === newCep)

    if (!endereco) {
        enderecos.push(apiEndereco.data)
        res.json(enderecos)
    } else {
        res.json(apiEndereco.data)
    }
})

app.listen(8000);

