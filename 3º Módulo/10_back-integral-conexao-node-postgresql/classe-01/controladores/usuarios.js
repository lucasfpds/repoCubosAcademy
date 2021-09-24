const conexao = require("../conexao");

// LISTAR TODOS OS Usuarios

const listarUsuarios = async (req, res) => {
  try {
    const { rows: usuarios } = await conexao.query("select * from usuarios");

    const { rows: emprestimos } = await conexao.query(
      "select * from emprestimos"
    );

    const newArr = [];

    usuarios.map((e) => {
      const id = e.id;
      const nome = e.nome;
      const idade = e.idade;
      const email = e.email;
      const telefone = e.telefone;
      const cpf = e.cpf;

      const arrEmprestimos = [];
      const obj = {
        id,
        nome,
        idade,
        email,
        telefone,
        cpf,
        emprestimos: arrEmprestimos,
      };

      emprestimos.filter((element) => {
        const idUsuario = element.id_usuario;

        if (idUsuario === id) {
          arrEmprestimos.push(element);
        }
        return element.idUsuario === id;
      });
      newArr.push(obj);
    });

    res.status(200).json(newArr);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obterUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const Usuario = await conexao.query(
      "select * from usuarios where id = $1",
      [id]
    );
    if (Usuario.rowCount === 0) {
      res.status(404).json("Nenhum Usuario foi encontrado");
    }
    res.status(200).json(Usuario.rows);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarUsuario = async (req, res) => {
  const { nome, idade, email, telefone, cpf } = req.body;

  if (!nome || !idade || !email || !telefone || !cpf) {
    res.status(400).json("Todos os campos são obrigatórios");
  }

  try {
    const query =
      "insert into usuarios (nome, idade, email, telefone, cpf) values ($1,$2,$3,$4,$5)";
    const Usuario = await conexao.query(query, [
      nome,
      idade,
      email,
      telefone,
      cpf,
    ]);

    if (Usuario.rowCount === 0) {
      res.status(400).json("Não foi possível cadastrar o Usuario");
    }
    res.status(200).json("Usuario cadastrado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarUsuario = async (req, res) => {
  const { id } = req.params;

  const { nome, idade, email, telefone, cpf } = req.body;

  if (!nome || !idade || !email || !telefone || !cpf) {
    res.status(400).json("Todos os campos são obrigatórios");
  }

  try {
    const Usuario = await conexao.query(
      "select * from usuarios where id = $1",
      [id]
    );

    if (Usuario.rowCount === 0) {
      res.status(404).json("Nenhum Usuario foi encontrado");
    }

    const query =
      "update usuarios set nome = $1, idade = $2, email = $3, telefone = $4, cpf = $5 where id = $6";

    const usuarioAtualizado = await conexao.query(query, [
      nome,
      idade,
      email,
      telefone,
      cpf,
      id,
    ]);
    if (usuarioAtualizado.rowCount === 0) {
      res.status(400).json("Não foi possível cadastrar o Usuario");
    }
    res.status(200).json("Usuario Atualizado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirUsuario = async (req, res) => {
  const { id } = req.params;
  
  try {

    const emprestimo = await conexao.query("select * from emprestimos where id_usuario = $1", [id]);

    if(emprestimo.rowCount !== 0){
      res.status(404).json('Não é possivel excluir um usuario com emprestimos na biblioteca');
    } else {

    const Usuario = await conexao.query(
      "select * from usuarios where id = $1",
      [id]
    );

    if (Usuario.rowCount === 0) {
      res.status(404).json("Nenhum Usuario foi encontrado");
    }

    const usuarioExcluido = await conexao.query(
      "delete from usuarios where id = $1",
      [id]
    );
    if (usuarioExcluido.rowCount === 0) {
      res.status(404).json("Não foi possível deletar nenhum Usuario");
    }
    res.status(200).json("Usuario excluido com sucesso!");
  }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listarUsuarios,
  obterUsuario,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
