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
const allowedOrigins = (
  process.env.CORS_ORIGIN || "http://localhost:3000"
).split(",").map(origin => origin.trim());

console.log("CORS_ORIGIN configurado:", process.env.CORS_ORIGIN);
console.log("Origins permitidos (após trim):", allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origem recebida:", origin);
    console.log("Permitida?", !origin || allowedOrigins.includes(origin));
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
    console.log("Testando conexão com o banco de dados...");

    // Primeiro, testa a autenticação
    await sequelize.authenticate();
    console.log(" Conexão com banco de dados estabelecida!");

    console.log("Iniciando sincronização do banco de dados...");
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
    console.log("Banco de dados sincronizado com sucesso!");
    
    // Remove constraints UNIQUE de campos nullable que causam erro
    try {
      await sequelize.query(`
        ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS UQ__usuarios__firebase_uid;
      `).catch(() => {});
      await sequelize.query(`
        ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS UQ__usuarios__stripe_costumer_id;
      `).catch(() => {});
      console.log("Constraints desnecessários removidos com sucesso!");
    } catch (constraintError) {
      console.log("Info: Constraints já foram removidos ou não existem");
    }
    
    dbConnected = true;
  } catch (error) {
    console.error(" Erro ao conectar/sincronizar banco de dados:");
    console.error("   Mensagem:", error.message);
    console.error("   Código:", error.code);
    if (error.original) {
      console.error("   Erro original:", error.original.message);
    }
    // Não fazer exit - deixar a app rodar mesmo sem BD por enquanto
    // para ver os logs de erro
  }

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(
      `Database status: ${dbConnected ? " CONECTADO" : " DESCONECTADO"}`,
    );
  });
})();
