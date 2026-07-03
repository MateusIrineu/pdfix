import { Sequelize } from "sequelize";
import initModels from "./init-models.js";

// Cria a conexão com o banco
const sequelize = new Sequelize(`
  ${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
  host: `${process.env.DB_HOST}`,
  dialect: "mssql",
});

// Inicializa os models
const models = initModels(sequelize);

// Função para testar a conexão com o banco de dados
async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  } finally {
    await sequelize.close();
  }
}

testarConexao();
