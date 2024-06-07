//  Require das dependências para o servidor.

const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const { connect, disconnect } = require("./database/connection")
const routes = require('./routes');

dotenv.config() //  Carrega variáveis do .env para o process.env.

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())  //  Converte JSON em objeto.
app.use(bodyParser.urlencoded({ extended: true }))    //  Permite aninhamento de objetos.

connect()   //  Conectando o banco de dados.
app.use('/api', routes) //  Chamando as rotas.

// Iniciando o servidor.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Desconectando do banco de dados ao sair do processo.

process.on('SIGINT', () => {
    disconnect()
    process.exit()
})

process.on('SIGTERM', () => {
    disconnect()
    process.exit()
})

//  Servidor configurado.