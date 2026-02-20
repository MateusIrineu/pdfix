import express from "express";
const router = express.Router();

import ExperienciaController from "../controllers/experienciaController.js";

router.post("/", ExperienciaController.criarExperiencia);
router.get("/", ExperienciaController.listarExperiencia);
router.patch("/:experiencia_id", ExperienciaController.atualizarExperiencia);
router.delete("/", ExperienciaController.deletarTodasExperiencias);
router.delete("/:experiencia_id", ExperienciaController.deletarExperiencias);

export default router;
