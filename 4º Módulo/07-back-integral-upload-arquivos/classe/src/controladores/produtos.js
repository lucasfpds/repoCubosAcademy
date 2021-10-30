const knex = require("../conexao");
const aws = require("../servicos/aws");

const listarProdutos = async (req, res) => {
  const { usuario } = req;
  const { categoria } = req.query;

  try {
    const produtos = await knex("produtos")
      .where({ usuario_id: usuario.id })
      .where((query) => {
        if (categoria) {
          return query.where("categoria", "ilike", `%${categoria}%`);
        }
      });

    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obterProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const produto = await knex("produtos")
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first();

    if (!produto) {
      return res.status(404).json("Produto não encontrado");
    }

    return res.status(200).json(produto);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarProduto = async (req, res) => {
  const { usuario } = req;
  const { nome, quantidade, preco, categoria, descricao, imagem } = req.body;
  let urlImg = "";
  if (!nome) {
    return res.status(404).json("O campo nome é obrigatório");
  }

  if (!quantidade) {
    return res.status(404).json("O campo quantidade é obrigatório");
  }

  if (!preco) {
    return res.status(404).json("O campo preco é obrigatório");
  }

  if (!descricao) {
    return res.status(404).json("O campo descricao é obrigatório");
  }

  if (imagem) {
    const buffer = Buffer.from(imagem, "base64");

    try {
      await aws.enviarImagem(`${nome}.jpg`, buffer);

      const resposta = {
        imagem: `${nome}.jpg`,
        urlImagem: aws.urlCompleta(nome),
      };

      urlImg = resposta.urlImagem;
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  try {
    const produto = await knex("produtos")
      .insert({
        usuario_id: usuario.id,
        nome,
        quantidade,
        preco,
        categoria,
        descricao,
        imagem: urlImg,
      })
      .returning("*");

    if (!produto) {
      return res.status(400).json("O produto não foi cadastrado");
    }

    return res.status(200).json(produto);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;
  const { nome, quantidade, preco, categoria, descricao } = req.body;

  if (!nome && !quantidade && !preco && !categoria && !descricao && !imagem) {
    return res
      .status(404)
      .json("Informe ao menos um campo para atualizaçao do produto");
  }

  try {
    const produtoEncontrado = await knex("produtos")
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first();

    if (!produtoEncontrado) {
      return res.status(404).json("Produto não encontrado");
    }

    const produto = await knex("produtos").where({ id }).update({
      nome,
      quantidade,
      preco,
      categoria,
      descricao,
    });

    if (!produto) {
      return res.status(400).json("O produto não foi atualizado");
    }

    return res.status(200).json("produto foi atualizado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const produtoEncontrado = await knex("produtos")
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first();

    if (!produtoEncontrado) {
      return res.status(404).json("Produto não encontrado");
    }

    const produtoExcluido = await knex("produtos")
      .where({
        id,
        usuario_id: usuario.id,
      })
      .del();

    if (!produtoExcluido) {
      return res.status(400).json("O produto não foi excluido");
    }

    return res.status(200).json("Produto excluido com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarImagemProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;
  const { nome, imagem } = req.body;
  let urlImagem = "";
  if (!nome || !imagem) {
    return res
      .status(404)
      .json("Os campos nome e imagem devem estar preenchidos");
  }

  try {
    const produtoEncontrado = await knex("produtos")
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first();

    if (!produtoEncontrado) {
      return res.status(404).json("Produto não encontrado");
    }

    const buffer = Buffer.from(imagem, "base64");

    try {
      await aws.enviarImagem(`${nome}`, buffer);

      const resposta = {
        imagem: nome,
        urlImagem: aws.urlCompleta(nome),
      };

      urlImagem = resposta.urlImagem;
    } catch (error) {
      console.log(error);
      res.json(error);
    }

    const produto = await knex("produtos").where({ id }).update({
      imagem: urlImagem,
    });

    if (!produto) {
      return res.status(400).json("A imagem não foi atualizada");
    }

    return res.status(200).json("Imagem foi atualizada com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirImagemProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;
  const { nome } = req.body;
  let urlImagem = "";
  if (!nome) {
    return res.status(404).json("O campo nome deve estar preenchido");
  }

  try {
    const produtoEncontrado = await knex("produtos")
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first();

    if (!produtoEncontrado) {
      return res.status(404).json("Produto não encontrado");
    }

    try {
      await aws.excluirImagem(nome);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }

      const produto = await knex("produtos").where({ id }).update({
        imagem: null,
      });

      if (!produto) {
        return res.status(400).json("O produto não foi atualizado");
      }

    return res.status(200).json("produto foi atualizado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
module.exports = {
  listarProdutos,
  obterProduto,
  cadastrarProduto,
  atualizarProduto,
  excluirProduto,
  atualizarImagemProduto,
  excluirImagemProduto,
};
