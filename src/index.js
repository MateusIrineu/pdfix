// Importa o framework Express, que facilita criar servidores web em Node.js
import express from "express";

// Importa o CORS, que permite que diferentes domínios acessem a API
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Cria a aplicação Express
const app = express();

// Habilita o CORS
app.use(cors());

// Permite ler JSON
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Carrega as rotas com tratamento de erro
async function loadRoutes() {
  try {
    const { default: usuarioRoutes } = await import("./modules/usuario/routes/usuarioRoute.js");
    const { default: experienciaRoutes } = await import("./modules/experiencia/routes/experienciaRouter.js");
    const { default: formacaoRoutes } = await import("./modules/formacao/routes/formacaoRoute.js");
    const { default: competenciasRoutes } = await import("./modules/competencias/routes/competenciasRoute.js");
    const { default: dadosPessoaisRoutes } = await import("./modules/dadosPessoais/routes/dadosPessoaisRoute.js");

    app.use("/api/usuarios", usuarioRoutes);
    app.use("/api/experiencia", experienciaRoutes);
    app.use("/api/formacao", formacaoRoutes);
    app.use("/api/competencias", competenciasRoutes);
    app.use("/api/dados-pessoais", dadosPessoaisRoutes);
    
    console.log("✅ Routes loaded successfully");
  } catch (error) {
    console.error("⚠️ Error loading routes:", error.message);
  }
}

// Porta do servidor
const PORT = process.env.PORT || 8080;

// Inicia o servidor
const server = app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});

// Carrega rotas após servidor estar ativo
loadRoutes();

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM recebido, encerrando gracefully...");
  server.close(() => {
    console.log("Servidor encerrado");
    process.exit(0);
  });
});
