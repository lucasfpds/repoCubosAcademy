const express = require('express');
const senha = require('./intermediario');
const rotas = require('./rotas');
const swaggerUi = require("swagger-ui-express")

const app = express();
app.use(express.json());
app.use(senha);

app.use(rotas.rotas)

app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("../swagger.json")));

module.exports = app;