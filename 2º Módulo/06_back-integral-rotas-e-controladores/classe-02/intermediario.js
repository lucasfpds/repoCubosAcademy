const express = require("express");
const app = express();
app.use(express.json());

function senha(req, res, next) {
  if (req.method === "GET" || req.query.senha === "123456") {
    next();
  } else {
    res.json({
      mensagem: "Senha Incorreta",
    });
  }
}

module.exports = senha;
