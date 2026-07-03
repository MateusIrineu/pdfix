import express from "express";
const router = express.Router();

import DadosPessoaisController from "../controllers/dadosPessoaisController.js";

// Rotas de dados pessoais
router.post("/", DadosPessoaisController.criarDadosPessoais);
router.get("/", DadosPessoaisController.listarDadosPessoais);
router.get("/:dados_pessoais_id", DadosPessoaisController.buscarDadosPessoaisPorId);
router.get("/usuario/:usuario_id", DadosPessoaisController.buscarDadosPessoaisPorUsuario);
router.patch("/:dados_pessoais_id", DadosPessoaisController.atualizarDadosPessoais);
router.delete("/:dados_pessoais_id", DadosPessoaisController.deletarDadosPessoais);
router.delete("/usuario/:usuario_id", DadosPessoaisController.deletarDadosPessoaisPorUsuario);

export default router;
