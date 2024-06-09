//  Require das dependências de userController.

const User = require("../models/user")

//  Criando funções que vão usar os métodos do modelo Game.

//  Função para buscar todos os usuários.

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para buscar usuário por id.

async function getUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para criar um novo usuário.

async function createUser(req, res) {
  try {
    const { username, email, senha } = req.body;
    const newUser = await User.create({ username, email, senha });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para atualizar um usuário.

async function updateUser(req, res) {
  try {
    const { username, email, senha } = req.body;
    const [updated] = await User.update(
      { username, email, senha },
      { where: { idUser: req.params.id } }
    );
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para deletar um usuário.

async function deleteUser(req, res) {
  try {
    const deleted = await User.destroy({ where: { idUser: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Exportando as funções.

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};