// Importa o Sequelize, que é o ORM (Object-Relational Mapping) para Node.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Importa a função que inicializa todos os models do projeto
import initModels from "./init-models.js";

// Cria uma instância do Sequelize, configurando a conexão com o banco de dados
let sequelize;

if (process.env.DB_DIALECT === "sqlite") {
  // Usar SQLite em desenvolvimento
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: process.env.DB_STORAGE || "./pdfix-dev.db",
    logging: false,
  });
} else {
  // Configuração para PostgreSQL, MySQL, SQL Server ou outro banco relacional
  const dialectConfig = {
    host: process.env.DB_HOST, // endereço do servidor do banco
    port: parseInt(process.env.DB_PORT, 10), // porta do banco (convertido para número)
    dialect: process.env.DB_DIALECT || "mssql", // tipo do banco de dados
    logging: false, // desabilita logs do Sequelize (opcional)
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };

  // Opções específicas por dialeto
  if (process.env.DB_DIALECT === "mssql") {
    dialectConfig.dialectOptions = {
      options: {
        encrypt: true, // requerido para Azure SQL Server
        trustServerCertificate: false, // segurança SSL
        useUTC: false,
        dateFirst: 1,
        connectionTimeout: 15000,
        requestTimeout: 30000,
      },
      pool: {
        max: 5,
        min: 1,
        idleTimeoutMillis: 30000,
      },
    };
  }

  if (process.env.DB_DIALECT === "postgres") {
    dialectConfig.dialectOptions = {
      pool: {
        max: 5,
        min: 1,
        idleTimeoutMillis: 30000,
      },
    };
  }

  sequelize = new Sequelize(
    process.env.DB_NAME, // nome do banco de dados
    process.env.DB_USER, // usuário do banco
    process.env.DB_PASS, // senha do usuário
    dialectConfig,
  );
}
// Inicializa todos os models do projeto e suas relações
const models = initModels(sequelize);

// Exporta tudo corretamente
export {
  sequelize, // instância do Sequelize
  Sequelize, // <-- A CLASSE Sequelize (era isso que faltava)
  models, // models do projeto
};

export default sequelize;
