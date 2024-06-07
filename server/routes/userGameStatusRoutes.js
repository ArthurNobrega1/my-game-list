//  Require das dependências para userGameStatusRoutes.

const express = require("express")
const UserGameStatusController = require("../controllers/userGameStatusController")

//  Chamando os métodos para rotas e o controlador dos status de jogos.

const router = express.router()
const userGameStatusController = new UserGameStatusController()

//  Chamando os métodos com as rotas.

router.get("/user/:userName", userGameStatusController.getStatusByUserName.bind(userGameStatusController))
router.post("/add", userGameStatusController.addGameStatus.bind(userGameStatusController))
router.put("/:id", userGameStatusController.updateGameStatus.bind(userGameStatusController))
router.delete("/:id", userGameStatusController.removeGameStatus.bind(userGameStatusController))

module.exports = router //  Exportando as rotas.