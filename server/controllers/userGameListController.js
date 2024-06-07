//  Require das dependências de UserGameListController.

const UserGameList = require("../models/userGameList")

//  Classe que irá controlar os métodos CRUD.

class UserGameListController {
    constructor() {
        this.userGameListModel = new UserGameList()
    }

    //  Mostra um jogo da lista pelo nome.

    async getListByUserName(req, res) {
        try {
            const userName = req.params.userName
            const list = await this.userGameListModel.getListByUserName(userName)
            res.json(list)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  Adiciona um jogo para a lista.

    async addGameToList(req, res) {
        try {
            const listData = req.body
            const newGame = await this.userGameListModel.addGameToList(listData)
            res.json(newGame)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  Atualiza um jogo da lista.

    async updateGameInList(req, res) {
        try {
            const id = req.params.id
            const listData = req.body
            const updatedGame = await this.userGameListModel.updateGameInList(id, listData)
            res.json(updatedGame)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //  Remove um jogo da lista.

    async removeGameFromList(req, res) {
        try {
            const id = req.params.id
            await this.userGameListModel.removeGameFromList(id)
            res.json({ message: "Jogo removido da lista com sucesso!" })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserGameListController //  Exportando o controlador.