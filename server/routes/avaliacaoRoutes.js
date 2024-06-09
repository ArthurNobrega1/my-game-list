//  Require das dependências de userGameListRoutes.

const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

//  Rotas para executar cada método.

router.get('/', avaliacaoController.getAllAvaliacoes);
router.get('/:id', avaliacaoController.getAvaliacaoById);
router.post('/', avaliacaoController.createAvaliacao);
router.put('/:id', avaliacaoController.updateAvaliacao);
router.delete('/:id', avaliacaoController.deleteAvaliacao);

module.exports = router;    //  Exportando as rotas que realizarão a chamada dos métodos.