//  Require das dependências para userGameStatus.

const connection = require("../database/connection")

class UserGameStatus {

    //  Status por nome de usuário.

    async getStatusByUserName(userName) {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT ugs.*
                FROM user_game_status ugs
                JOIN users u ON ugs.userId = u.id
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

    //  Adiciona um status para um jogo.

    async addGameStatus(statusData) {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO user_game_status SET ?", statusData, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ id: results.insertId, ...statusData })
                }
            })
        })
    }

    //  Atualiza o status do jogo.

    async updateGameStatus(id, statusData) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE user_game_status SET ? WHERE id = ?", [statusData, id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ id, ...statusData })
                }
            })
        })
    }

    async deleteGameStatus(id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM user_game_status WHERE id = ?", [id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = UserGameStatus