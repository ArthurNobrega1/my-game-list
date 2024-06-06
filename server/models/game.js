//  Require das dependências de game.

const connection = require("../database/connection")

//  Classe Game.

class Game {

    //  Mostra todos os jogos, caso não funcione, mostra error.

    async getAllGames() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM games", (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

    //  Não teremos buscar jogos por ID, apenas pelo nome.

    //  getGameByName, mostra um jogo através da busca pelo seu nome, caso não funcione, mostra error.

    async getGameByName(name) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM games WHERE name = ?', [name], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results[0])
                }
            })
        })
    }

    //  createGame, insere um novo jogo para o banco de dados, caso não funcione, mostra error.

    async createGame(gameData) {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO games SET?", gameData, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ id: results.insertId, ...gameData })
                }
            })
        })
    }

    //  updateGame, atualiza as informações de um jogo, caso não funcione, mostra error.

    async updateGame(id, gameData) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE games SET ? WHERE id = ?", [gameData, id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ id, ...gameData })
                }
            })
        })
    }

    //  deleteGame, deleta um jogo, caso não funcione, mostra error.

    async deleteGame(id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM games WHERE id = ?", [id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = Game //  Exportando o Game com os métodos (get, getByName, create, update, delete).