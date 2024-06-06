//  Require das dependências para as rotas.

const express = require("express")
const gameRoutes = require("./gameRoutes")
const userRoutes = require("./userRoutes")
const userGameListRoutes = require("./userGameListRoutes")
const userGameStatusRoutes = require("./userGameStatusRoutes")

const router = express.Router() //  Cria uma nova instância para separar rotas.

//  Similar a app.use, porém para as rotas.

router.use("/games", gameRoutes)
router.use("/users", userRoutes)
router.use("/user-games", userGameListRoutes)
router.use("/user-status", userGameStatusRoutes)

//  Rotas configuradas.

module.exports = router //  Exportando o express.Router().