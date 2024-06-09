//  Require das dependências para conectar o banco de dados.

const { Sequelize } = require("sequelize");
const dotenv = require("dotenv"); //  Dotenv devidamente configurado.

dotenv.config();

//  Usando o .env para criar uma conexão com sequelize.

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  }
);

//  Await para testar conexão.

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1); // Saída com código de erro
  }
})();

module.exports = sequelize;

//  Servidor configurado.