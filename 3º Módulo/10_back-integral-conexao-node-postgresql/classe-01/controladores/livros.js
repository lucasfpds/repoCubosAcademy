const conexao = require("../conexao");


// LISTAR TODOS OSLivros

const listarLivros = async (req, res) => {
  try {    
    const { rows: livros } = await conexao.query("select * from livros;");
    
    res.status(200).json(livros);
  } catch (error) {
    return res.status(400).json(error.message)
  }};

const obterLivro = async (req, res) => {
  const {id} = req.params
  try {    
    const livro = await conexao.query("select * from livros where id = $1", [id]);
    if(livro.rowCount === 0){
      res.status(404).json('Nenhum livro foi encontrado');
    }
    res.status(200).json(livro.rows);
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

const cadastrarLivro = async (req, res) => {
  const {autor_id,nome,editora,genero,data_publicacao} = req.body

  if( !autor_id || !nome || !editora || !genero || !data_publicacao ){
    res.status(400).json('Todos os campos são obrigatórios');
  }

  try {
    const query = "insert into livros (autor_id, nome, editora, genero, data_publicacao) values ($1,$2,$3,$4,$5)"
    const livro = await conexao.query(query, [autor_id,nome,editora,genero,data_publicacao]);
    if(livro.rowCount === 0){
      res.status(400).json('Não foi possível cadastrar o livro');
    }
    res.status(200).json('Livro cadastrado com sucesso');
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

const atualizarLivro = async (req, res) => {
  const {id} = req.params;
  
  const {autor_id,nome,editora,genero,data_publicacao} = req.body

  if( !autor_id || !nome || !editora || !genero || !data_publicacao ){
    res.status(400).json('Todos os campos são obrigatórios');
  }

  try {
    const livro = await conexao.query("select * from livros where id = $1", [id]);
    
    if(livro.rowCount === 0){
      res.status(404).json('Nenhum livro foi encontrado');
    }

    const query = "update livros set autor_id = $1, nome = $2, editora = $3, genero = $4, data_publicacao = $5 where id = $6"

    const livroAtualizado = await conexao.query(query, [autor_id,nome,editora,genero,data_publicacao,id]);
    if(livroAtualizado.rowCount === 0){
      res.status(400).json('Não foi possível cadastrar o livro');
    }
    res.status(200).json('Livro Atualizado com sucesso');
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

const excluirLivro = async (req, res) => {
  const {id} = req.params
  try {    
    const livro = await conexao.query("select * from livros where id = $1", [id]);
    
    if(livro.rowCount === 0){
      res.status(404).json('Nenhum livro foi encontrado');
    }

    const livroExcluido = await conexao.query("delete from livros where id = $1", [id]);
    if(livroExcluido.rowCount === 0){
      res.status(404).json('Não foi possível deletar nenhum livro');
    }
    res.status(200).json('Livro excluido com sucesso!');
  } catch (error) {
    return res.status(400).json(error.message)
  }    
};

module.exports = {
  listarLivros,
  obterLivro,
  cadastrarLivro,
  atualizarLivro,
  excluirLivro,
};
