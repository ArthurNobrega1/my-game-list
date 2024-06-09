//  Require das dependências de user.

const { DataTypes } = require("sequelize")
const sequelize = require("../database/connection")

//  Definindo o modelo User com os métodos para interagir com o banco de dados.

const User = sequelize.define("User", {
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
}, {
    tableName: 'usuario', //    Nome da tabela no banco de dados.
    timestamps: false     //    Se não estiver usando campos de timestamps como createdAt e updatedAt.
  });
  
  module.exports = User;    //  Exportando o modelo.