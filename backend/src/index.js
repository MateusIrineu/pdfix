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
try {
  await sequelize.authenticate();
  console.log("✅ Banco conectado com sucesso!");
  
  // ⚠️ CUIDADO: force: true apaga todas as tabelas!
  // Use apenas em desenvolvimento
  await sequelize.sync({ force: false });
  console.log("✅ Tabelas sincronizadas!");
} catch (err) {
  console.error("❌ Erro ao conectar:", err);
}
// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));