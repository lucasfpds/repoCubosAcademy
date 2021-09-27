const conexao = require("../conexao");
const bcrypt = require("bcrypt");

// LISTAR TODOS OS Usuarios
const listarUsuarios = async (req, res) => {
  try {
    const { rows: usuarios } = await conexao.query("select * from usuarios");

    return res.status(200).json(usuarios);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json(error.message);
  }
};

const cadastrarUsuario = async (req, res) => {
  const {nome, email, senha} = req.body;

  try {

      if(!nome){
          return res.status(404).json('O campo nome é obrigatório');
      }

      if(!email){
          return res.status(404).json('O campo email é obrigatório');
      }

      if(!senha){
          return res.status(404).json('O campo senha é obrigatório');
      }
      const queryConsultaEmail = 'select * from usuarios where email = $1';

      const { rowCount: quantidadeUsuario  } = await conexao.query(queryConsultaEmail, [email]);

      if(quantidadeUsuario > 0 ){
          return res.status(400).json('O email já existe');
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const query = 'insert into usuarios (nome, email, senha) values ($1, $2, $3)';
      const usuarioCadastrado = await conexao.query(query, [nome, email, senhaCriptografada]);

      if(usuarioCadastrado.rowCount === 0){
          return res.status(400).json('Não foi possível cadastrar o usuário');
      }

      return res.status(200).json('Usuário cadastrado com sucesso');

  } catch (error) {
      console.log(error.message)
      return res.status(400).json(error.message)
  };

};

module.exports = {
  listarUsuarios,
  cadastrarUsuario,
};
