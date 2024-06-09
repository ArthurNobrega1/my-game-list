//  Require das dependências para gameController.

const Game = require("../models/game");

//  Criando funções que vão usar os métodos do modelo Game.

//  Função para criar um novo jogo.

async function createGame(req, res) {
  try {
    const { gameName, sinopse, lancamento, plataformas, genero } = req.body;
    const game = await Game.create({
      gameName,
      sinopse,
      lancamento,
      plataformas,
      genero,
    });
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar jogo!" });
  }
}

//  Função para buscar todos os jogos.

async function getAllGames(req, res) {
  try {
    const games = await Game.findAll();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar jogos!" });
  }
}

//  Função para buscar um jogo pelo ID.

async function getGameById(req, res) {
  try {
    const { id } = req.params;
    const game = await Game.findOne({ where: { idGame: id } });
    if (!game) {
      return res.status(404).json({ error: "Jogo não encontrado!" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar jogo!" });
  }
}

//  Função para atualizar um jogo já existente.

async function updateGame(req, res) {
  try {
    const { id } = req.params;
    const { gameName, sinopse, lancamento, plataformas, genero } = req.body;
    const game = await Game.findOne({ where: { idGame: id } });
    if (!game) {
      return res.status(404).json({ error: "Jogo não encontrado!" });
    }
    await Game.update(
      { gameName, sinopse, lancamento, plataformas, genero },
      { where: { idGame: id } }
    );
    res.status(200).json({ message: "Jogo atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar jogo!" });
  }
}

//  Função para excluir um jogo.

async function deleteGame(req, res) {
  try {
    const { id } = req.params;
    await Game.destroy({ where: { idGame: id } });
    res.status(200).json({ message: "Jogo excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o jogo!" });
  }
}

//  Exportando as funções.

module.exports = { 
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame,
};