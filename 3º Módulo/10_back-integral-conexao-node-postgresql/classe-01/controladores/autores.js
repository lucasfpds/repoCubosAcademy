const conexao = require("../conexao");

// LISTAR TODOS OS AUTORES
const listarAutores = async (req, res) => {
  try {    
    // const { rows: autores } = await conexao.query("select * from autores;");
    const query = 'select autores.id, autores.nome as nome_autor, livros.autor_id, livros.nome, livros.editora, livros.genero, livros.data_publicacao from autores join livros on autores.id = livros.autor_id;'

    const { rows: autores } = await conexao.query(query);
    
    res.status(200).json(autores);
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

//LISTAR UM AUTOR
const obterAutor = async (req, res) => {
  const {id} = req.params
  try {    
    const autor = await conexao.query("select * from autores where id = $1", [id]);
    if(autor.rowCount === 0){
      res.status(404).json('Nenhum autor foi encontrado');
    }
    res.status(200).json(autor.rows);
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

// CADASTRAR AUTOR
const cadastrarAutor = async (req, res) => {
  const {nome, idade} = req.body

  if(!nome){
    res.status(400).json('O campo nome é obrigatório');
  } else if (!idade){
    res.status(400).json('O campo idade é obrigatório');
  }

  try {
    const query = "insert into autores (nome, idade) values ($1,$2)"
    const autor = await conexao.query(query, [nome, idade]);
    if(autor.rowCount === 0){
      res.status(400).json('Não foi possível cadastrar o autor');
    }
    res.status(200).json('Autor cadastrado com sucesso');
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

// ATUALIZAR AUTOR
const atualizarAutor = async (req, res) => {

  const {nome, idade} = req.body

  const {id} = req.params

  try {    
    const autor = await conexao.query("select * from autores where id = $1", [id]);
    
    if(autor.rowCount === 0){
      res.status(404).json('Nenhum autor foi encontrado');
    }

    const query ='update autores set nome = $1, idade = $2 where id = $3'
    const autorAtualizado = await conexao.query(query, [nome, idade, id])
    
    if(autorAtualizado.rowCount === 0){
      res.status(404).json('Não foi possível atualizar o autor');
    }

    res.status(200).json('Autor atualizado com sucesso');
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

// EXCLUIR AUTOR
const excluirAutor = async (req, res) => {  
  const {id} = req.params

    const livro = await conexao.query("select * from livros where autor_id = $1", [id]);
    if(livro.rowCount !== 0){
      res.status(404).json('Não é possivel excluir um autor com livros na biblioteca');
    }

  try {    
    const autor = await conexao.query("select * from autores where id = $1", [id]);
    
    if(autor.rowCount === 0){
      res.status(404).json('Nenhum autor foi encontrado');
    }

    const autorExcluido = await conexao.query("delete from autores where id = $1", [id]);
    if(autorExcluido.rowCount === 0){
      res.status(404).json('Não foi possível deletar nenhum autor');
    }
    res.status(200).json('Autor excluido com sucesso!');
  } catch (error) {
    return res.status(400).json(error.message)
  }
};

module.exports = {
  listarAutores,
  obterAutor,
  cadastrarAutor,
  atualizarAutor,
  excluirAutor,
};
