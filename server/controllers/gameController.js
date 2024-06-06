//  Require das dependências para gameController.

const Game = require("../models/game")

//  classe para controlar os métodos de game.js

class GameController {

    constructor() { //  Construtor para fazer qualquer método contido em Game.
        this.gameModel = new Game()
    }

    async getAllGames(req, res) {
        try {
            const games = await this.gameModel.getAllGames()    //  Pausa a execução da promisse.
            res.json(games)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async getGameByName(req, res) {
        try {
            const name = req.params.name
            const game = await this.gameModel.getGameByName(name)
            res.json(game)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async createGame(req, res) {
        try {
            const gameData = req.body
            const newGame = await this.gameModel.createGame(gameData)
            res.json(newGame)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateGame(req, res) {
        try {
            const id = req.params.id
            const gameData = req.body
            const updatedGame = await this.gameModel.updateGame(id, gameData)
            res.json(updatedGame)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteGame(req, res) {
        try {
            const id = req.params.id
            await this.gameModel.deleteGame(id)
            res.json({ message: "Jogo deletado com sucesso!" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = GameController //  Exportando gameController, controlador de game.