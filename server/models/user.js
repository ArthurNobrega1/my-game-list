//  Require das dependências de user.

const connection = require("../database/connection")
const bcrypt = require("bcryptjs")

//  Classe user faz a validação do usuário e senha, ou seja, o login, registra, atualiza e deleta.

class User {

    //  login faz a entrada de um usuário já cadastrado no banco de dados, se não, mostra error.

    async loginUser(email, senha) {
        return new Promise((resolve, reject) => {
            // Recupera o usuário pelo email
            connection.query("SELECT * FROM users WHERE email = ?", [email], (error, results) => {
                if (error) {
                    reject(error);
                } else if (results.length === 0) {
                    reject(new Error('Usuário não encontrado'));
                } else {
                    const user = results[0];
                    // Compara a senha fornecida com a hash armazenada
                    bcrypt.compare(senha, user.senhaHash, (err, isMatch) => {
                        if (err) {
                            reject(err);
                        } else if (!isMatch) {
                            reject(new Error('Senha incorreta'));
                        } else {
                            resolve(user);
                        }
                    });
                }
            });
        });
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