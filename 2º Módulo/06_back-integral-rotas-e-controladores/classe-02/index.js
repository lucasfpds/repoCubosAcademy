const express = require("express");
const senha = require("./intermediario");
const roteador = require("./roteador  ");
const app = express();

app.use(express.json());

app.use(senha);

app.use(roteador);

app.listen(8000);
