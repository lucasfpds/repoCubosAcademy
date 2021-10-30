const knex = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');
const nodemailer = require('../nodemailer');
require("dotenv").config();

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(404).json('É obrigatório email e senha');
    }

    try {
        const usuario = await knex('usuarios').where({ email }).first();
        
        if (!usuario) {
            return res.status(404).json('O usuario não foi encontrado');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json("Email e senha não confere");
        }

        const token = jwt.sign({ id: usuario.id }, senhaHash, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuario;

        // envio de email
        const dadosEnvio = {
            from: ' Market Cubos <postmaster@sandbox539f7108fc71456598254d7d490ad7ff.mailgun.org>',
            to: email,
            subject: "Bem Vindo ao Market Cubos",
            // text: `Olá ${nome}. Voce realizou um cadastro no market cubos e pode fazer um login com o email ${email}`
            template: 'cadastro',
            context:{
                nome: usuario.nome,
                email
            }
          }

        nodemailer.sendMail(dadosEnvio);

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}