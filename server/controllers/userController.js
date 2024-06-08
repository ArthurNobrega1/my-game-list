//  Require das dependências de userController.

const User = require("../models/user")

//  Classe para controlar os métodos de user.js

class UserController {
    constructor() {
        this.userModel = new User()
    }

    //  login do usuário.

    async loginUser(req, res) {
        const { email, senha } = req.body;
        try {
            const user = await userModel.loginUser(email, senha);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    //  registerUser, registra um novo usuário.

    async registerUser(req, res) {
        try {
            const { username, email, senha } = req.body
            const newUser = await this.userModel.registerUser({ username, email, senha })
            res.json(newUser)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  updateUser, atualiza as informações de um usuário.

    async updateUser(req, res) {
        try {
            const id = req.params.id
            const userData = req.body
            const updateUser = await this.userModel.updateUser(id, userData)
            res.json(updateUser)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  deleteUser, deleta um usuário.

    async deleteUser(req, res) {
        try {
            const id = req.params.id
            await this.userModel.deleteUser(id)
            res.json({ message: "Usuário deletado com sucesso!" })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController //  Exportação da classe userController para controlar os métodos de user.