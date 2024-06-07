//  Require das dependências para o banco de dados.

const mysql = require("mysql")
const dotenv = require("dotenv")

dotenv.config() //  Carrega variáveis do .env para o process.env.

let connection  //  Criando variável para o método connection

//  Função de conectar.

function connect() {
    if (!connection) {
        connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        })
    }

    connection.connect((err) => {
        if (err) {
            console.log(`Error ao conectar com o banco de dados!`, err)
            process.exit(1)
        } else {
            console.log("Conectado ao banco de dados!")
        }
    })
    return connection
}

//  Função de desconectar.

function disconnect() {
    if (connection) {
        connection.end((err) => {
            if (err) {
                console.log(`Error ao desconectar com o banco de dados!`, err)
            } else {
                console.log("Desconectado do banco de dados!")
            }
        })
        connection = null
    }
}

//  Função getConnection.

function getConnection() {
    if (!connection) {
        connect()
    }
    return connection
}

//  Exportando connection.

module.exports = {
    connect,
    disconnect,
    getConnection
}

//  Conexão com o banco de dados configurado.