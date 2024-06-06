//  Require das dependências para o servidor.

const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const routes = require("./routes")

dotenv.config() //  Carrega variáveis do .env para o process.env.

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())  //  Converte JSON em objeto.
app.use(bodyParser.urlencoded({ extended: true }))    //  Permite aninhamento de objetos.

app.use("/", routes)    //  Definindo as rotas para o express.

//  Iniciando o servidor.

app.listen(PORT, () => {
    console.log(`Servidor está funcionando na porta ${PORT}`)
})

//  Servidor configurado.