// Importa o framework Express, que facilita criar servidores web em Node.js
import express from "express";

// Importa o CORS, que permite que diferentes domínios acessem a API
import cors from "cors";

// Importa a conexão com o banco de dados configurada no Sequelize
import { sequelize } from "./database/index.js";


import path from 'path';

// Cria a aplicação Express
const app = express();

// Habilita o CORS
app.use(cors());

// Permite ler JSON
app.use(express.json());



// Testa a conexão com o banco
sequelize
  .authenticate()
  .then(() => console.log("Banco conectado com sucesso!"))
  .catch((err) => console.error("Erro ao conectar:", err));

// Porta do servidor
const PORT = 5432;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));