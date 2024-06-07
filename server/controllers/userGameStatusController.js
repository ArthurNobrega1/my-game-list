//  Require das depenências para userGameStatusController.

const UserGameStatus = require("../models/userGameStatus")

//  Construtor

class UserGameStatusController {
    constructor() {
        this.UserGameStatusModel = new UserGameStatus()
    }

    //  Controlador que mostra os status de um jogo pelo nome.

    async getStatusByUserName(req, res) {
        try {
            const userName = req.params.userName
            const statusList = await this.UserGameStatusModel.getStatusByUserName(userName)
            res.json(statusList)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  Controlador que adiciona um status para um jogo.

    async addGameStatus(req, res) {
        try {
            const statusData = req.body
            const newStatus = await this.UserGameStatusModel.addGameStatus(statusData)
            res.json(newStatus)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  Controlador que atualiza um status de um jogo.

    async updateGameStatus(req, res) {
        try {
            const id = req.params.id
            const statusData = req.body
            const updatedStatus = await this.UserGameStatusModel.updateGameStatus(statusData)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  Controlador que remove um status de um jogo.

    async removeGameStatus(req, res) {
        try {
            const id = req.params.id
            await this.UserGameStatusModel.removeGameStatus(id)
            res.json({ message: "Status do jogo removido com sucesso!" })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserGameStatusController