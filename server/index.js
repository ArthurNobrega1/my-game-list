//  Configurando o dotenv.

require("dotenv").config({ path: "../.env" });

//  Require das dependências para o servidor.

const bodyParser = require("body-parser");
const express = require("express");
const indexRoutes = require("./routes/indexRoutes");
const sequelize = require("./database/connection");

//  Configurando os métodos.

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); //  Converte JSON em objeto.
app.use(bodyParser.urlencoded({ extended: true })); //  Permite aninhamento de objetos.
app.use("/", indexRoutes); //  Usando as rotas.

// Iniciando o servidor.

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//  Servidor configurado.
