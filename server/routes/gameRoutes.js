//  Require das dependências para game.

const express = require("express")
const GameController = require("../controllers/gameController")

const router = express.Router()
const gameController = new GameController()

//  Rotas para executar cada método.

router.get("/", gameController.getAllGames)
router.get("/name/:name", gameController.getGameByName)
router.post("/", gameController.createGame)
router.put("/:id", gameController.updateGame)
router.delete("/:id", gameController.deleteGame)

module.exports = router //  Exportando as rotas que realizarão a chamada dos métodos.