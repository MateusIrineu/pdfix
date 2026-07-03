import express from "express";
const router = express.Router();

import UsuarioController from "../controllers/usuarioController.js";
import authMiddleware from "../../../middleware/authMiddleware.js";

// Rotas específicas DEVEM VIR ANTES das genéricas (/:id)
router.post(
  "/firebase/login",
  authMiddleware,
  UsuarioController.criarOuRecuperarUsuarioFirebase,
);
router.delete(
  "/delete/account",
  authMiddleware,
  UsuarioController.deletarContaCompleta,
);

// Rotas genéricas
router.post("/", UsuarioController.criarUsuario);
router.get("/", UsuarioController.listarUsuario);
router.get("/:id", UsuarioController.listarUsuarioPorId);
router.patch("/:id", UsuarioController.atualizarUsuario);
router.delete("/:id", UsuarioController.deletarUsuario);

export default router;
