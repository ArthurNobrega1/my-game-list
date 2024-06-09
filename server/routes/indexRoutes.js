//  Require das dependências para as rotas.

const express = require("express");
const router = express.Router();

// Importando e utilizando as rotas de avaliacaoRoutes.

const avaliacaoRoutes = require("./avaliacaoRoutes");
router.use("/avaliacoes", avaliacaoRoutes);

// Importando e utilizando as rotas de gameRoutes.

const gameRoutes = require("./gameRoutes");
router.use("/jogos", gameRoutes);

// Importando e utilizando as rotas de userRoutes.

const userRoutes = require("./userRoutes");
router.use("/usuarios", userRoutes);

//  Importando e utilizando as rotas de userList.

const userListRoutes = require("./userListRoutes");
router.use("/usuarios", userListRoutes);

module.exports = router; //  Exportando todas as rotas em uma única.
