//  Require das dependências para userGameList.

const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

//  Definindo o modelo Avaliacao.

const Avaliacao = sequelize.define(
  "Avaliacao",
  {
    idAvaliacao: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "idGame",
      },
    },

    idGame: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "jogos", // Nome da tabela do modelo 'jogo'
        key: "idGame",
      },
    },

    nota: {
      type: DataTypes.INTEGER,
    },

    comentario: {
      type: DataTypes.STRING(255),
    },

    estado: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "avaliacao", //  Nome da tabela no banco de dados.
    timestamps: false, //    Se não estiver usando campos de timestamps como createdAt e updatedAt.
  }
);

module.exports = Avaliacao; //  Exportando o modelo.
