const dados = require("../src/bancodedados");
const fs = require("fs");

// GET
const consultar = async (req, res) => {
  try {
    res.send(dados.contas);
  } catch (error) {
    res.status("400");
    res.json({
      mensagem: "o servidor não pode encontrar o recurso solicitado",
    });
  }
};

//POST
const criarConta = async (req, res) => {
  const dadosBody = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    data: req.body.data_nascimento,
    telefone: req.body.telefone,
    email: req.body.email,
    senha: req.body.senha,
  };

  let erros = 0;
  for (let i in dadosBody) {
    if (dadosBody[i] == " " || !dadosBody[i] || dadosBody[i] == "") {
      erros += 1;
      res.status("400");
      res.json({
        mensagem:
          "O servidor não entendeu a requisição pois Algum parâmetro está com uma sintaxe/formato inválido",
      });
    }
  }

  if (erros == 0) {
    const novaConta = {
      numero: String(dados.contas.length + 1),
      saldo: 0,
      usuario: dadosBody,
    };

    dados.contas.push(novaConta);

    novoArquivo = JSON.stringify(dados, null, 2);
    fs.writeFileSync(
      "./src/bancodedados.js",
      "module.exports = " + novoArquivo
    );
    res.status("201");
    res.send(novaConta);
  } else {
    res.status("400");
    res.json({
      mensagem:
        "O servidor não entendeu a requisição pois está com uma sintaxe/formato inválido",
    });
  }
};
//PUT
const alterarConta = async (req, res) => {
  try {
    const numConta = req.params.numeroConta;

    const dadosBody = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      data: req.body.data_nascimento,
      telefone: req.body.telefone,
      email: req.body.email,
      senha: req.body.senha,
    };

    let objVazio = true;

    for (let i in dadosBody) {
      if (!(dadosBody[i] == " " || !dadosBody[i])) {
        objVazio = false;
      }
    }

    if (objVazio) {
      res.status("400");
      res.json({
        mensagem: "Não foi passado ao menos um campo no body da requisição",
      });
    } else {
      if (!(Number(numConta) >= 1 && Number(numConta) <= dados.contas.length)) {
        res.status("400");
        res.json({
          mensagem:
            "O numero da conta passado como parametro na URL é inválida",
        });
      } else {
        let cpfIncorreto = false;
        for (let i of dados.contas) {
          if (i.usuario.cpf == dadosBody.cpf && i.numero != numConta) {
            cpfIncorreto = true;
          }
        }
        if (cpfIncorreto) {
          res.status("401");
          res.send({
            mensagem:
              "O CPF for informado já existe outro registro com o mesmo CPF",
          });
        } else {
          let emailIncorreto = false;
          for (let i of dados.contas) {
            if (i.usuario.email == dadosBody.email && i.numero != numConta) {
              emailIncorreto = true;
            }
          }

          if (emailIncorreto) {
            res.status("401");
            res.json({
              mensagem:
                "O email for informado já existe outro registro com o mesmo CPF",
            });
          } else {
            for (let i in req.body) {
              let objAlteracao = dados.contas[numConta - 1].usuario;

              if (i == "nome") {
                objAlteracao.nome = req.body[i];
              } else if (i == "cpf") {
                objAlteracao.cpf = req.body[i];
              } else if (i == "data_nascimento") {
                objAlteracao.data_nascimento = req.body[i];
              } else if (i == "telefone") {
                objAlteracao.telefone = req.body[i];
              } else if (i == "email") {
                objAlteracao.email = req.body[i];
              } else if (i == "senha") {
                objAlteracao.senha = req.body[i];
              }
            }
          }
        }
      }

      novoArquivo = JSON.stringify(dados, null, 2);
      fs.writeFileSync(
        "./src/bancodedados.js",
        "module.exports = " + novoArquivo
      );
      res.status("201");
      res.send({
        mensagem: "Conta atualizada com sucesso!",
      });
    }
  } catch (error) {
    res.status("401");
    res.json({
      mensagem:
        "O servidor não entendeu a requisição pois está com uma sintaxe/formato inválido",
    });
  }
};

//PUT
const cancelarConta = async (req, res) => {
  try {
    const numConta = req.params.numeroConta;

    if (Number(numConta) >= 1 && Number(numConta) <= dados.contas.length) {
      null;
    } else {
      res.status("400");
      res.json({
        mensagem: "O numero da conta passado como parametro na URL é inválida",
      });
    }

    if (!(dados.contas[numConta - 1].saldo == 0)) {
      res.status("404");
      res.json({
        mensagem:
          "Só é possível excluir uma conta bancária se o saldo for 0 (zero)",
      });
    } else {
      dados.contas.splice(numConta - 1, 1);
    }

    for (let i of dados.contas) {
      if (i.numero > numConta) {
        i.numero = String(Number(i.numero) - 1);
      }
    }

    novoArquivo = JSON.stringify(dados, null, 2);
    fs.writeFileSync(
      "./src/bancodedados.js",
      "module.exports = " + novoArquivo
    );
    res.status("201");
    res.send({
      mensagem: "Conta excluída com sucesso!",
    });
  } catch (error) {
    res.status("400");
    res.json({
      mensagem:
        "O servidor não entendeu a requisição pois está com uma sintaxe/formato inválido",
    });
  }
};

//POST
const depositar = async (req, res) => {
  try {
    const dadosDeposito = {
      data: req.body.data,
      numero_conta: req.body.numero_conta,
      valor: req.body.valor,
    };

    if (dadosDeposito.numero_conta == "" || dadosDeposito.numero_conta == " ") {
      res.status("400");
      res.json({
        mensagem:
          "O numero da conta passado como parametro no corpo esta vazio",
      });
    }

    if (!(dadosDeposito.valor > 0)) {
      res.status("400");
      res.json({
        mensagem: "O valor da operação não pode ser 0",
      });
    }

    if (
      !(
        Number(dadosDeposito.numero_conta) >= 1 &&
        Number(dadosDeposito.numero_conta) <= dados.contas.length
      )
    ) {
      res.status("400");
      res.json({
        mensagem:
          "O numero da conta passado como parametro no corpo é inválido",
      });
    }

    dados.contas[dadosDeposito.numero_conta - 1].saldo += dadosDeposito.valor;
    dados.depositos.push(dadosDeposito);

    novoArquivo = JSON.stringify(dados, null, 2);
    fs.writeFileSync(
      "./src/bancodedados.js",
      "module.exports = " + novoArquivo
    );
    res.status("201");
    res.send({
      mensagem: "Depósito realizado com sucesso!",
    });
  } catch (error) {
    res.status("400");
    res.json({
      mensagem:
        "O servidor não entendeu a requisição pois está com uma sintaxe/formato inválido",
    });
  }
};

// POST
const sacar = async (req, res) => {
  try {
    const dadosSaque = {
      data: req.body.data,
      numero_conta: req.body.numero_conta,
      valor: req.body.valor,
    };

    if (dadosSaque.numero_conta == "" || dadosSaque.numero_conta == " ") {
      res.status("400");
      res.json({
        mensagem:
          "O numero da conta passado como parametro no corpo esta vazio",
      });
    } else if (
      !(
        Number(dadosSaque.numero_conta) >= 1 &&
        Number(dadosSaque.numero_conta) <= dados.contas.length
      )
    ) {
      res.status("400");
      res.json({
        mensagem:
          "O numero da conta passado como parametro no corpo é inválido",
      });
    } else if (
      !(
        dados.contas[dadosSaque.numero_conta - 1].usuario.senha ===
        req.query.senha_conta
      )
    ) {
      res.status("400");
      res.send({
        mensagem: "Senha da conta incorreta",
      });
    } else if (!(dadosSaque.valor > 0)) {
      res.status("400");
      res.json({
        mensagem: "O valor da operação não pode ser 0",
      });
    } else if (
      dadosSaque.valor > dados.contas[dadosSaque.numero_conta - 1].saldo
    ) {
      res.status("400");
      res.json({
        mensagem: "Não há saldo disponível para saque!",
      });
    } else {
      dados.contas[dadosSaque.numero_conta - 1].saldo -= dadosSaque.valor;
      dados.saques.push(dadosSaque);

      novoArquivo = JSON.stringify(dados, null, 2);
      fs.writeFileSync(
        "./src/bancodedados.js",
        "module.exports = " + novoArquivo
      );
      res.status("201");
      res.send({
        mensagem: "Saque realizado com sucesso!",
      });
    }
  } catch (error) {
    res.status("400");
    res.json({
      mensagem:
        "O servidor não entendeu a requisição pois está com uma sintaxe/formato inválido",
    });
  }
};

//POST
const transferir = async (req, res) => {
  try {
    const dadosTransferencia = {
      data: req.body.data,
      numero_conta_origem: req.body.numero_conta_origem,
      numero_conta_destino: req.body.numero_conta_destino,
      valor: req.body.valor,
    };

    if (
      dadosTransferencia.numero_conta_origem == "" ||
      dadosTransferencia.numero_conta_origem == " " ||
      dadosTransferencia.numero_conta_destino == "" ||
      dadosTransferencia.numero_conta_destino == " "
    ) {
      res.status("400");
      res.json({
        mensagem:
          "O numero da conta passado como parametro no corpo esta vazio",
      });
    } else if (!(dadosTransferencia.valor > 0)) {
      res.status("400");
      res.json({
        mensagem: "O valor da operação não pode ser 0",
      });
    } else if (
      !(
        Number(dadosTransferencia.numero_conta_origem) >= 1 &&
        Number(dadosTransferencia.numero_conta_origem) <= dados.contas.length &&
        Number(dadosTransferencia.numero_conta_destino) >= 1 &&
        Number(dadosTransferencia.numero_conta_destino) <=
          dados.contas.length &&
        dadosTransferencia.numero_conta_destino !=
          dadosTransferencia.numero_conta_origem
      )
    ) {
      res.status("400");
      res.json({
        mensagem:
          "O numero da conta passado como parametro no corpo é inválido",
      });
    } else if (
      !(
        dados.contas[dadosTransferencia.numero_conta_origem - 1].usuario
          .senha === req.query.senha_conta
      )
    ) {
      res.status("400");
      res.json({
        mensagem: "Senha da conta incorreta",
      });
    } else if (
      dadosTransferencia.valor >
      dados.contas[dadosTransferencia.numero_conta_origem - 1].saldo
    ) {
      res.status("400");
      res.json({
        mensagem: "Não há saldo disponível para transferencia!",
      });
    } else {
      dados.contas[dadosTransferencia.numero_conta_origem - 1].saldo -=
        dadosTransferencia.valor;
      dados.contas[dadosTransferencia.numero_conta_destino - 1].saldo +=
        dadosTransferencia.valor;
      dados.transferencias.push(dadosTransferencia);

      novoArquivo = JSON.stringify(dados, null, 2);
      fs.writeFileSync(
        "./src/bancodedados.js",
        "module.exports = " + novoArquivo
      );
      res.status("201");
      res.send({
        mensagem: "Transferência realizada com sucesso!",
      });
    }
  } catch (error) {
    res.status("400");
    res.json({
      mensagem:
        "O servidor não entendeu a requisição pois está com uma sintaxe/formato inválido",
    });
  }
};

// GET
const saldo = async (req, res) => {
  try {
    if (
      Number(req.query.numero_conta) == undefined ||
      Number(req.query.numero_conta) == "" ||
      Number(req.query.numero_conta) == " "
    ) {
      res.status("400");
      res.json({
        mensagem: "O numero da conta Não foi informado",
      });
    } else if (
      Number(req.query.senha) == undefined ||
      Number(req.query.senha) == "" ||
      Number(req.query.senha) == " "
    ) {
      res.status("400");
      res.json({
        mensagem: "O numero da senha Não foi informado",
      });
    }

    if (
      !(
        Number(req.query.numero_conta) >= 1 &&
        Number(req.query.numero_conta) <= dados.contas.length
      )
    ) {
      res.status("400");
      res.json({
        mensagem: "O numero da conta é inválido",
      });
    }
    // else if (
    //   !(
    //     dados.contas[req.query.numero_conta - 1].usuario.senha ===
    //     req.query.senha
    //   )
    // ) {
    //   res.status("400");
    //   res.json({
    //     mensagem: "Senha da conta incorreta",
    //   });
    // }

    res.send({
      saldo: dados.contas[req.query.numero_conta - 1].saldo,
    });
  } catch (error) {
    res.status("400");
    res.json({
      mensagem: "o servidor não pode encontrar o recurso solicitado",
    });
  }
};

// GET
const extrato = async (req, res) => {
  try {
    if (
      Number(req.query.numero_conta) == undefined ||
      Number(req.query.numero_conta) == "" ||
      Number(req.query.numero_conta) == " "
    ) {
      res.status("400");
      res.json({
        mensagem: "O numero da conta Não foi informado",
      });
    } else if (
      Number(req.query.senha) == undefined ||
      Number(req.query.senha) == "" ||
      Number(req.query.senha) == " "
    ) {
      res.status("400");
      res.json({
        mensagem: "O numero da senha Não foi informado",
      });
    }

    if (
      !(
        Number(req.query.numero_conta) >= 1 &&
        Number(req.query.numero_conta) <= dados.contas.length
      )
    ) {
      res.status("400");
      res.json({
        mensagem: "O numero da conta é inválido",
      });
    }
    // else if (
    //   !(
    //     dados.contas[req.query.numero_conta - 1].usuario.senha ===
    //     req.query.senha
    //   )
    // ) {
    //   res.status("400");
    //   res.json({
    //     mensagem: "Senha da conta incorreta",
    //   });
    // }

    let dadosExtrato = {
      depositos: [],
      saques: [],
      transferenciasEnviadas: [],
      transferenciasRecebidas: [],
    };

    const numConta = req.query.numero_conta;

    for (let i of dados.depositos) {
      if (i.numero_conta == numConta) {
        dadosExtrato.depositos.push(i);
      }
    }

    for (let i of dados.saques) {
      if (i.numero_conta == numConta) {
        dadosExtrato.saques.push(i);
      }
    }

    for (let i of dados.transferencias) {
      if (i.numero_conta_origem == numConta) {
        dadosExtrato.transferenciasEnviadas.push(i);
      }
    }

    for (let i of dados.transferencias) {
      if (i.numero_conta_destino == numConta) {
        dadosExtrato.transferenciasRecebidas.push(i);
      }
    }

    res.send({
      dadosExtrato,
    });
  } catch (error) {
    res.status("400");
    res.json({
      mensagem: "o servidor não pode encontrar o recurso solicitado",
    });
  }
};

module.exports = {
  consultar,
  criarConta,
  alterarConta,
  cancelarConta,
  depositar,
  sacar,
  transferir,
  saldo,
  extrato,
};

// 200 = requisição bem sucedida
// 201 = requisição bem sucedida e algo foi criado
// 400 = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 404 = o servidor não pode encontrar o recurso solicitado
