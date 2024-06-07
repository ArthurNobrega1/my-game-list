//  Require das dependências para userGameList.

const connection = require("../database/connection")

//  Classe UserGameList com os métodos CRUD.

class UserGameList {

    //  Procura um jogo na lista pelo nome.

    async getListByUserName(userName) {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT ugl.*
                FROM user_game_list ugl
                JOIN users u ON ugl.userId = u.id
                WHERE u.username = ?`

            connection.query(query, [userName], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

    //  Adiciona um jogo a lista.

    async addGameToList(listData) {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO user_game_list SET ?", listData, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ id: results.insertId, ...listData })
                }
            })
        })
    }

    //  Atualiza um jogo da lista.

    async updateGameInList(id, listData) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE user_game_list SET ? WHERE id = ?", [listData, id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ id, ...listData })
                }
            })
        })
    }

    //  Remove um jogo da lista.

    async removeGameFromList(id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM user_game_list WHERE id = ?", [id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = UserGameList   //  Exportando os métodos.