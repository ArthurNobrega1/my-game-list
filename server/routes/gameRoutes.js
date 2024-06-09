//  Require das dependências para gameRoutes.

const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

//  Rotas para executar cada método.

router.route("/").post(gameController.createGame);
router.get('/', gameController.getAllGames);
router.get('/:id', gameController.getGameById);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);

module.exports = router; //  Exportando as rotas que realizarão a chamada dos métodos.