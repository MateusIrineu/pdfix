// Importa o Sequelize, que é o ORM (Object-Relational Mapping) para Node.js
import { Sequelize } from "sequelize";

// Importa a função que inicializa todos os models do projeto
import initModels from "./init-models.js";

// Cria uma instância do Sequelize, configurando a conexão com o banco de dados
const sequelize = new Sequelize(
  "pdfix_db", // nome do banco de dados
  "postgres", // usuário do banco
  "BemVindo!", // senha do usuário
  {
    host: "localhost", // endereço do servidor do banco
    dialect: "postgres", // tipo do banco de dados
  },
);

// Inicializa todos os models do projeto e suas relações
const models = initModels(sequelize);

// Exporta tudo corretamente
export {
  sequelize, // instância do Sequelize
  Sequelize, // <-- A CLASSE Sequelize (era isso que faltava)
  models, // models do projeto
};

export default sequelize;
