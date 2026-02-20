// Importa o framework Express, que facilita criar servidores web em Node.js
import express from "express";

// Importa o CORS, que permite que diferentes domínios acessem a API
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
// Importa a conexão com o banco de dados configurada no Sequelize
import { sequelize } from "./database/index.js";

import usuarioRoutes from "./modules/usuario/routes/usuarioRoute.js";
import experienciaRoutes from "./modules/experiencia/routes/experienciaRouter.js";
import formacaoRoutes from "./modules/formacao/routes/formacaoRoute.js";
import competenciasRoutes from "./modules/competencias/routes/competenciasRoute.js";
import dadosPessoaisRoutes from "./modules/dadosPessoais/routes/dadosPessoaisRoute.js";

// Cria a aplicação Express
const app = express();

// Habilita o CORS
app.use(cors());

// Permite ler JSON
app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/experiencia", experienciaRoutes);
app.use("/api/formacao", formacaoRoutes);
app.use("/api/competencias", competenciasRoutes);
app.use("/api/dados-pessoais", dadosPessoaisRoutes);

// Testa a conexão com o banco
try {
  await sequelize.authenticate();
  console.log("✅ Banco conectado com sucesso!");

  // ⚠️ CUIDADO: force: true apaga todas as tabelas!
  // Use apenas em desenvolvimento
  await sequelize.sync({ force: false });
  console.log(" Tabelas sincronizadas!");
} catch (err) {
  console.error(" Erro ao conectar:", err);
}
// Porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
