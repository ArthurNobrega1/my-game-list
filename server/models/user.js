//  Require das dependências de user.

const connection = require("../database/connection")
const bcrypt = require("bcryptjs")

//  Classe user faz a validação do usuário e senha, ou seja, o login, registra, atualiza e deleta.

class User {

    //  login faz a entrada de um usuário já cadastrado no banco de dados, se não, mostra error.

    async login(email, senha) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE email = ?", [email], async (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    if (results.length > 0) {
                        const match = await bcrypt.compare(senha, results[0].senhaHash)
                        if (match) {
                            resolve(results[0])
                        } else {
                            reject(new Error("Senha incorreta!"))
                        }
                    } else {
                        reject(new Error("Usuário não encontrado!"))
                    }
                }
            })
        })
    }

    //  registerUser registra um usuário, caso não funcionar, mostra error.

    async registerUser(userData) {
        return new Promise((resolve, reject) => {
            const { username, email, senha } = userData
            bcrypt.hash(senha, 10, (err, hash) => {
                if (err) {
                    reject(err)
                } else {
                    connection.query("INSERT INTO users (username, email, senhaHash) VALUES (?, ?, ?)", [username, email, hash], (error, results) => {
                        if (error) {
                            reject(error)
                        } else {
                            resolve({ id: results.insertId, username, email })
                        }
                    })
                }
            })
        })
    }

    //  updateUser atualiza informações do banco de dados, caso não funcionar, mostra error.

    async updateUser(id, userData) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE users SET ? WHERE id = ?", [userData, id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve({ id, ...userData })
                }
            })
        })
    }

    //  deleteUser deleta um usuário, se não funcionar, mostrar error.

    async deleteUser(id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM users WHERE id = ?", [id], (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = User   //  Exporta a classe User com seus devidos métodos.