const express = require("express");
const router = express.Router();
const UserListController = require("../controllers/userListController");

// Rotas para executar cada método.

router.post("/:idUser/lista", UserListController.addGameToList);
router.get("/:idUser/lista", UserListController.getGameList);
router.put("/:idUser/lista/:idList", UserListController.updateGameInList);
router.delete("/:idUser/lista/:idList", UserListController.removeGameFromList);

module.exports = router; // Exportando as rotas que realizarão a chamada dos métodos.
