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
import {
  webhookRouter,
  stripeRouter,
} from "./modules/stripe/routes/stripe_event.routes.js";

// Cria a aplicação Express
const app = express();

// Configuração do CORS
const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim());

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir requisições sem origin (como mobile apps ou curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Habilita o CORS
app.use(cors(corsOptions));

app.use("/stripe", webhookRouter);
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
  let dbConnected = false;

  try {
    // Primeiro, testa a autenticação
    await sequelize.authenticate();

    // ANTES de sincronizar, remover constraints problemáticas
    try {
      await sequelize.query(`ALTER TABLE usuarios DROP CONSTRAINT UQ__usuarios__6331C661A0FA653D`).catch(() => {});
    } catch (err) {
      // Ignorar erro se não existir
    }

    // Sincroniza o banco de dados (cria tabelas se não existirem)
    await Promise.race([
      sequelize.sync({ alter: process.env.NODE_ENV === "development" }),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Database sync timeout after 60s")),
          60000,
        ),
      ),
    ]);

    dbConnected = true;
  } catch (error) {
    // Erro ao conectar/sincronizar banco de dados
  }

  app.listen(PORT, () => {
    // Servidor iniciado
  });
})();
