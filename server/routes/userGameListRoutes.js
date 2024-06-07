//  Require das dependências de userGameListRoutes.

const express = require("express")
const UserGameListController = require("../controllers/userGameListController")

//  Chamando os métodos para rotas e o controlador da lista de jogos.

const router = express.Router()
const userGameListController = new UserGameListController()

//  Chamando os métodos com as rotas.

router.get("user/: userName", userGameListController.getListByUserName.bind(userGameListController))
router.post("/add", userGameListController.addGameToList.bind(userGameListController))
router.put("/:id", userGameListController.updateGameInList.bind(userGameListController))
router.delete("/:id", userGameListController.removeGameFromList.bind(userGameListController))

module.exports = router //  Exportando as rotas.