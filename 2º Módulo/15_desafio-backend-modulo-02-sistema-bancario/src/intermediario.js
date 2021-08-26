const express = require("express");
const app = express();
app.use(express.json());

function senha(req, res, next) {
  if (req.query.senha === "123") {
    next();
  } else if (req.url.includes("transacoes") || req.url.includes("docs")) {
    next();
  } else {
    res.status("404");
    res.json(
      "o servidor não pode encontrar o recurso solicitado. Senha Incorreta"
    );
  }
}

module.exports = senha;
