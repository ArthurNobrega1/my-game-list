//  Require das dependências de userGameListRoutes.

const express = require("express");
const router = express.Router();
const avaliacaoController = require("../controllers/avaliacaoController");

//  Rotas para executar cada método.

router.post("/", avaliacaoController.createAvaliacao);
router.get("/", avaliacaoController.getAllAvaliacoes);
router.get("/:id", avaliacaoController.getAvaliacaoById);
router.get('/all/:idUser', avaliacaoController.getAvaliacoesByUserId);
router.put("/:id", avaliacaoController.updateAvaliacao);
router.delete('/:id/:idUser', avaliacaoController.deleteAvaliacao);


module.exports = router; //  Exportando as rotas que realizarão a chamada dos métodos.
