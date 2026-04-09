// Importa o Sequelize, que é o ORM (Object-Relational Mapping) para Node.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Importa a função que inicializa todos os models do projeto
import initModels from "./init-models.js";

// Cria uma instância do Sequelize, configurando a conexão com o banco de dados
let sequelize;

if (process.env.DB_DIALECT === 'sqlite') {
  // Usar SQLite em desenvolvimento
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || './pdfix-dev.db',
    logging: false
  });
} else {
  // Usar SQL Server (Azure)
  sequelize = new Sequelize(
    process.env.DB_NAME, // nome do banco de dados
    process.env.DB_USER, // usuário do banco
    process.env.DB_PASS, // senha do usuário
    {
      host: process.env.DB_HOST, // endereço do servidor do banco
      port: process.env.DB_PORT || 1433, // porta padrão do SQL Server
      dialect: process.env.DB_DIALECT || 'mssql', // tipo do banco de dados
      dialectOptions: {
        options: {
          encrypt: true, // requerido para Azure SQL Server
          trustServerCertificate: false, // segurança SSL
          useUTC: false,
          dateFirst: 1
        }
      },
      logging: false // desabilita logs do Sequelize (opcional)
    }
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
