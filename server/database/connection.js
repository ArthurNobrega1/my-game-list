//  Require das dependências para o banco de dados.

const mysql = require("mysql")
const dotenv = require("dotenv")

dotenv.config() //  Carrega variáveis do .env para o process.env.

//  Criando uma conexão.

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

//  Conexão com o banco de dados configurado.

module.exports = connection //  Exportando connection.