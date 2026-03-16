// Importa o framework Express, que facilita criar servidores web em Node.js
import express from "express";

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

// Cria a aplicação Express
const app = express();

// Habilita o CORS
app.use(cors());

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
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
