const knex = require('../conexao');
const bcrypt = require('bcrypt');
const nodemailer = require('../nodemailer');
const handlebars = require('nodemailer-express-handlebars');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório");
    }

    try {
        const quantidadeUsuarios = await knex('usuarios').where('email', email);
        
        if (quantidadeUsuarios.length > 0) {
            return res.status(400).json("O email já existe");
        }
        
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        
        const usuario = await knex('usuarios').insert({nome, email, senha: senhaCriptografada, nome_loja}).returning('*');
        
        if (usuario.rowCount === 0) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }

        // envio de email
        const dadosEnvio = {
            from: ' Market Cubos <postmaster@sandbox539f7108fc71456598254d7d490ad7ff.mailgun.org>',
            to: email,
            subject: "Bem Vindo ao Market Cubos",
            // text: `Olá ${nome}. Voce realizou um cadastro no market cubos e pode fazer um login com o email ${email}`
            template: 'cadastro',
            context:{
                nome,
                email
            }
          }

        nodemailer.sendMail(dadosEnvio);
        return res.status(200).json("O usuario foi cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        // update usuarios set nome = $1, email = $2...
        const body = {};
        const params = [];
        let n = 1;

        if (nome) {
            body.nome = nome;
        }

        if (email) {
            if (email !== req.usuario.email) {
                const quantidadeUsuarios = await knex('usuarios').where('email', email);
                if (quantidadeUsuarios.length > 0) {
                    return res.status(400).json("O email já existe");
                }
            }

            body.email = email;
        }

        if (senha) {
            body.senha = await bcrypt.hash(senha, 10);
        }

        if (nome_loja) {
            body.nome_loja = nome_loja;
        }

        id = req.usuario.id;
        const usuarioAtualizado = await knex('usuarios').update(body).where("id", id).returning("*");

        if (usuarioAtualizado.length === 0) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        return res.status(200).json('Usuario foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}