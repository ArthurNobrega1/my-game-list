//  Require das dependências para user.

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//  Rotas para executar cada método.

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router; //  Exportando as rotas que realizarão a chamada dos métodos.
