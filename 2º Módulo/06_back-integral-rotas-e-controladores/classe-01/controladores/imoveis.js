
 const imoveis = require('../dados/imoveis');

function mostrarImoveis(req,res){
    res.json(imoveis)
}

function buscarImoveis (req, res){
    const id = Number(req.params.idImovel)
    const imovel = imoveis.find((imoveis) => imoveis.id === id)
    res.json(imovel)
}    
 
 module.exports = {
     mostrarImoveis,
     buscarImoveis,
}