//  Require das dependências de avaliacao.

const Avaliacao = require("../models/avaliacao");

//  Criando funções que vão usar os métodos do modelo avaliacao.

//  Função para obter todas as avaliações.

async function getAllAvaliacoes(req, res) {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para obter uma avaliação por ID.

async function getAvaliacaoById(req, res) {
  try {
    const avaliacao = await Avaliacao.findByPk(req.params.id);
    if (avaliacao) {
      res.json(avaliacao);
    } else {
      res.status(404).json({ error: "Avaliacao não encontrada!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para criar uma nova avaliação.

async function createAvaliacao(req, res) {
  try {
    const { idUser, idGame, nota, comentario, estado } = req.body;
    const novaAvaliacao = await Avaliacao.create({
      idUser,
      idGame,
      nota,
      comentario,
      estado,
    });
    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para atualizar uma avaliação.

async function updateAvaliacao(req, res) {
  try {
    const { idUser, idGame, nota, comentario, estado } = req.body;
    const avaliacao = await Avaliacao.findByPk(req.params.id);
    if (avaliacao) {
      avaliacao.idUser = idUser;
      avaliacao.idGame = idGame;
      avaliacao.nota = nota;
      avaliacao.comentario = comentario;
      avaliacao.estado = estado;
      await avaliacao.save();
      res.json(avaliacao);
    } else {
      res.status(404).json({ error: "Avaliacao não encontrada!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para deletar uma avaliação.

async function deleteAvaliacao(req, res) {
  try {
    const avaliacao = await Avaliacao.findByPk(req.params.id);
    if (avaliacao) {
      await avaliacao.destroy();
      res.json({ message: "Avaliacao excluída com sucesso!" });
    } else {
      res.status(404).json({ error: "Avaliacao não encontrada!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Exportando as funções.

module.exports = {
  getAllAvaliacoes,
  getAvaliacaoById,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
};