const knex = require('../conexao');

const listarProdutos = async (req, res) => {
    const { usuario } = req;
    const { categoria } = req.query;

    try {

        if(categoria){
            const produtos = await knex('produtos').where({'usuario_id': usuario.id, 'categoria': categoria})
            return res.status(200).json(produtos);
        }
        const produtos = await knex('produtos').where('usuario_id', usuario.id)
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({'usuario_id': usuario.id, id: id })

        if (produto.length === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(produto[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarProduto = async (req, res) => {
    const { usuario } = req;
    const { nome, quantidade, preco, categoria, descricao, imagem } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!quantidade) {
        return res.status(404).json('O campo quantidade é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório');
    }

    try {
        const produto = await knex('produtos').insert({usuario_id: usuario.id, nome, quantidade, preco, categoria, descricao, imagem }).returning('*');

        if (produto.length === 0) {
            return res.status(400).json('O produto não foi cadastrado');
        }
        console.log(produto)
        return res.status(200).json('O produto foi cadastrado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { nome, quantidade, preco, categoria, descricao, imagem } = req.body;

    if (!nome && !quantidade && !preco && !categoria && !descricao && !imagem) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do produto');
    }

    try {
        
        const produtoEncontrado = await knex('produtos').where('id', id);

        if (produtoEncontrado.length === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        const body = {};

        if (nome) {
            body.nome = nome;
        }

        if (quantidade) {
            body.quantidade = quantidade;
        }

        if (categoria) {
            body.categoria = categoria;
        }

        if (descricao) {
            body.descricao = descricao;
        }

        if (preco) {
            body.preco = preco;
        }

        if (imagem) {
            body.imagem = imagem;
        }
        

        const produtoAtualizado = await knex('produtos').update(body).where({"id": id, usuario_id: usuario.id}).returning("*");

        console.log(produtoAtualizado)
        if (produtoAtualizado.length === 0) {
            return res.status(400).json("O produto não foi atualizado");
        }

        return res.status(200).json('produto foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
           
        const produtoEncontrado = await knex('produtos').where({'id': id, usuario_id: usuario.id});

        if (produtoEncontrado.length === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await knex('produtos').del().where({'id': id}).returning('*');

        if (produtoExcluido.length === 0) {
            return res.status(400).json("O produto não foi excluido");
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
}