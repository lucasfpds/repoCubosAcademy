const conexao = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const segredo = require('../segredo')

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {

    if (!email || !senha) {
      return res.status(404).json("Os campos email e senha são obrigatórios");
    }

    const query = "select * from usuarios where email = $1";
    const usuarioEncontrado = await conexao.query(query, [email]);

    
    if (usuarioEncontrado.rowCount === 0) {
        return res.status(404).json("Usuario não encontrado");
    }

    const senhaVerificada = await bcrypt.compare(senha, usuarioEncontrado.rows[0].senha);

    if (
      usuarioEncontrado.rows[0].email !== email ||
      !senhaVerificada
    ) {
      return res.status(400).json('Email ou senha incorretos');
    }

    const token = jwt.sign({id: usuarioEncontrado.rows[0].id}, segredo, {expiresIn: '1d'});

    const { senha: senhaUsuario, ...dadosUsuarios } = usuarioEncontrado.rows[0];

    console.log(token, dadosUsuarios)

    return res.status(200).json({dadosUsuarios, token});
    
  } catch (error) {
    console.log(error.message);
    return res.status(400).json(error.message);
  }
};

module.exports = {
  login,
};
