//  Require das dependências para userList.

const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const Game = require("./game");
const Avaliacao = require("./avaliacao");

//  Definindo o modelo userList.

const UserList = sequelize.define(
  "UserList",
  {
    idList: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "idUser",
      },
    },
    idGame: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Game",
        key: "idGame",
      },
    },
  },
  {
    tableName: "usuarioLista",
    timestamps: false,
  }
);

UserList.belongsTo(Game, { foreignKey: "idGame" }); // Define a relação com o modelo de jogo
UserList.belongsTo(Avaliacao, { foreignKey: "idGame", targetKey: "idGame" }); //  E com Avaliacao.

module.exports = UserList; //  Exportando o modelo.
