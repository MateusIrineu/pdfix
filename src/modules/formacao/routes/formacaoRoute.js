import express from "express";
const router = express.Router();

import FormacaoController from "../controllers/formacaoController.js";

router.post("/", FormacaoController.criarFormacaoAcademica);
router.get("/", FormacaoController.listarFormacoes);
router.get("/:formacao_id", FormacaoController.listarFormacaoPorId);
router.patch("/:formacao_id", FormacaoController.atualizarFormacao);
router.delete("/:formacao_id", FormacaoController.deletarFormacao);
router.delete("/", FormacaoController.deletarTodasFormacoes);

export default router;
