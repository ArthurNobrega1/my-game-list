//  Require das dependências de avaliacao.

const Avaliacao = require("../models/avaliacao");
const Game = require("../models/game");

//  Criando funções que vão usar os métodos do modelo avaliacao.

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

//  Função para mostrar todas as avaliações.

async function getAllAvaliacoes(req, res) {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para mostrar uma avaliação por ID.

async function getAvaliacaoById(req, res) {
  try {
    const avaliacao = await Avaliacao.findByPk(req.params.id);
    if (avaliacao) {
      res.json(avaliacao);
    } else {
      res.status(404).json({ error: "Avaliação não encontrada!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para mostrar avaliações por id do usuário.

async function getAvaliacoesByUserId(req, res) {
  try {
    const avaliacoes = await Avaliacao.findAll({
      where: { idUser: req.params.idUser },
      include: [
        {
          model: Game,
          as: "Game",
        },
      ],
    });
    if (avaliacoes.length > 0) {
      res.json(avaliacoes);
    } else {
      res
        .status(404)
        .json({ error: "Nenhuma avaliação encontrada para este usuário!" });
    }
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
      res.status(404).json({ error: "Avaliação não encontrada!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Função para deletar uma avaliação.

async function deleteAvaliacao(req, res) {
  try {
    const idAvaliacao = req.params.id; // Extrai idAvaliacao dos parâmetros da solicitação.
    const idUser = req.params.idUser; // Extrai idUser dos parâmetros da solicitação.
    if (!idAvaliacao || !idUser) {
      return res
        .status(400)
        .json({ error: "Parâmetros idAvaliacao e idUser são obrigatórios!" });
    }
    const avaliacao = await Avaliacao.findOne({
      where: { idAvaliacao: idAvaliacao, idUser: idUser },
    });

    if (avaliacao) {
      await avaliacao.destroy();
      res.json({ message: "Avaliação excluída com sucesso!" });
    } else {
      res.status(404).json({ error: "Avaliação não encontrada!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//  Exportando as funções.

module.exports = {
  createAvaliacao,
  getAllAvaliacoes,
  getAvaliacaoById,
  getAvaliacoesByUserId,
  updateAvaliacao,
  deleteAvaliacao,
};
