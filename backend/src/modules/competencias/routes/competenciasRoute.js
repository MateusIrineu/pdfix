import express from "express";
const router = express.Router();

import CompetenciaController from "../controllers/competenciasController.js";

router.post("/", CompetenciaController.criarCompetencia);
router.get("/", CompetenciaController.listarCompetencias);
router.patch("/:competencia_id", CompetenciaController.atualizarCompetencia);
router.delete("/", CompetenciaController.deletarCompetencias);

export default router;
