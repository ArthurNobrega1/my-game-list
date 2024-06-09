//  Require das dependências de userListController.

const UserList = require("../models/userList");
const Game = require("../models/game");

//  Criando funções que vão usar os métodos do modelo userList.

//  Função para adicionar um jogo para a lista.

async function addGameToList(req, res) {
  try {
    const { idUser } = req.params;
    const { idGames } = req.body;

    let userList = await UserList.findOne({ where: { idUser } });

    if (!userList) {
      // Se não existir, cria uma nova lista
      userList = await UserList.create({ idUser });
    }

    const gamesToAdd = idGames.map((id) => ({ idUser, idGame: id }));
    await UserList.bulkCreate(gamesToAdd);

    res.status(201).json({ message: "Jogos adicionados à lista com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno no servidor!" });
  }
}

//  Função para mostrar um jogo da lista.

async function getGameList(req, res) {
  try {
    const { idUser } = req.params;
    const gameList = await UserList.findAll({
      where: { idUser },
      include: [Game],
    });
    res.status(200).json(gameList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno no servidor!" });
  }
}

//  Função para atualizar um jogo dentro da lista.

async function updateGameInList(req, res) {
  try {
    const { idUser, idList } = req.params;
    const { idGame } = req.body;
    await UserList.update({ idGame }, { where: { idList, idUser } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno no servidor!" });
  }
}

//  Função para remover um jogo de dentro da lista.

async function removeGameFromList(req, res) {
  try {
    const { idUser, idList } = req.params;
    await UserList.destroy({ where: { idList, idUser } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno no servidor!" });
  }
}

//  Exportando as funções.

module.exports = {
  addGameToList,
  removeGameFromList,
  getGameList,
  updateGameInList,
};
