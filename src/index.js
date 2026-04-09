// Importa o framework Express, que facilita criar servidores web em Node.js
import express from "express";

// Importa o Sequelize e banco de dados
import { sequelize } from "./database/index.js";

// Importa o CORS, que permite que diferentes domínios acessem a API
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import usuarioRoutes from "./modules/usuario/routes/usuarioRoute.js";
import experienciaRoutes from "./modules/experiencia/routes/experienciaRouter.js";
import formacaoRoutes from "./modules/formacao/routes/formacaoRoute.js";
import competenciasRoutes from "./modules/competencias/routes/competenciasRoute.js";
import dadosPessoaisRoutes from "./modules/dadosPessoais/routes/dadosPessoaisRoute.js";
import healthRoutes from "./routes/healthRoute.js";
import { webhookRouter, stripeRouter } from "./modules/stripe/routes/stripe_event.routes.js";

// Cria a aplicação Express
const app = express();

// Configuração do CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Habilita o CORS
app.use(cors(corsOptions));

app.use('/stripe', webhookRouter);
// Permite ler JSON
app.use(express.json());

// Rota de Health Check
app.use("/health", healthRoutes);

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/experiencia", experienciaRoutes);
app.use("/api/formacao", formacaoRoutes);
app.use("/api/competencias", competenciasRoutes);
app.use("/api/dados-pessoais", dadosPessoaisRoutes);

// Porta do servidor
const PORT = process.env.PORT;

// Sincronizar banco de dados e iniciar servidor
(async () => {
  try {
    // Sincroniza o banco de dados (cria tabelas se não existirem)
    await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
    console.log("Banco de dados sincronizado com sucesso!");
    
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error("Erro ao sincronizar banco de dados:", error);
    process.exit(1);
  }
})();
