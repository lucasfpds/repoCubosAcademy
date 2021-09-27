const conexao = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const segredo = require('../segredo')


const listarPostagem = async (req, res) => {

    try {
        const postagens = await conexao.query('select * from postagens');
        return res.status(200).json(postagens.rows);

     } catch {
        console.log(error.message);
        return res.status(400).json(error.message);        
    }
}



const postagensUsuario = async (req, res) => {
    const {usuario} = req

    try {
        const postagens = await conexao.query('select * from postagens where usuario_id = $1', [usuario.id]);

        return res.status(200).json(postagens.rows);

     } catch(error) {
        console.log(error.message);
        return res.status(400).json(error.message);        
    }
}


const cadastrarPostagem = async (req, res) => {
    const {texto} = req.body
    const {usuario} = req;

    try {
        
      if(!texto){
        return res.status(404).json('O campo texto é obrigatório');
    }
    
    const postagem = await conexao.query('insert into postagens (usuario_id, texto) values ($1,$2)', [usuario.id, texto])
    
    if(postagem.rowCount ===  0){
        return res.status(404).json('Não foi possível cadastrar a postagem');
    }

    return res.status(200).json('A postagem foi feita com sucesso')
} catch (error) {
        console.log(error.message)
        return res.status(400).json(error.message)        
    }
}


const atualizarPostagem = async (req, res) => {
    const {texto} = req.body
    const {id: idPostagem} = req.params
    const {usuario} = req;

    try {
        
      if(!texto){
        return res.status(404).json('O campo texto é obrigatório');
    }
        
    const queryPostagem = 'select * from postagens where id = $1 and usuario_id = $2';
    const postagemExistente = await conexao.query(queryPostagem, [idPostagem, usuario.id])

    if(postagemExistente.rowCount === 0){
        return res.status(404).json('Postagem não foi encontrada');
    }

    const queryAtualizarPostagem = 'update postagens set texto = $1 where id = $2 and usuario_id = $3';
    const postagem = await conexao.query(queryAtualizarPostagem, [texto, idPostagem, usuario.id])
    
    if(postagem.rowCount ===  0){
        return res.status(404).json('Não foi possível cadastrar a postagem');
    }

    return res.status(200).json('A Atualização foi feita com sucesso')
} catch (error) {
        console.log(error.message)
        return res.status(400).json(error.message)        
    }
}


const excluirPostagem = async (req, res) => {
    const {id} = req.params
    const {usuario} = req;

    try {
                
    const queryPostagem = 'select * from postagens where id = $1 and usuario_id = $2';
    const postagemExistente = await conexao.query(queryPostagem, [id, usuario.id])

    if(postagemExistente.rowCount === 0){
        return res.status(404).json('Postagem não foi encontrada');
    }

    const queryExcluirPostagem = 'delete from postagens where id = $1';
    const postagem = await conexao.query(queryExcluirPostagem, [id])
    
    if(postagem.rowCount ===  0){
        return res.status(404).json('Não foi possível excluir a postagem');
    }

    return res.status(200).json('A Postagem foi excluida com sucesso');

} catch (error) {
        console.log(error.message)
        return res.status(400).json(error.message)        
    }
}


module.exports = {
    cadastrarPostagem,
    atualizarPostagem,
    excluirPostagem,
    listarPostagem,
    postagensUsuario
}
