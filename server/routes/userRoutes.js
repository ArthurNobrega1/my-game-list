//  Require das dependências para user.

const express = require("express")
const UserController = require("../controllers/userController")

const router = express.Router()
const userController = new UserController()

// Rotas para os métodos de user, o bind garante que o this sempre esteja correto.

router.post('/login', userController.login.bind(userController))
router.post('/register', userController.registerUser.bind(userController))
router.put('/:id', userController.updateUser.bind(userController))
router.delete('/:id', userController.deleteUser.bind(userController))

module.exports = router //  Exportando as rotas que realizarão a chamada dos métodos.