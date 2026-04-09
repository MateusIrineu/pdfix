import express from "express"
const router = express.Router()

import UsuarioController from "../controllers/usuarioController.js"
import authMiddleware from "../../../middleware/authMiddleware.js"
import criarUsuarioAoLogin from "../../../middleware/criarUsuarioAoLogin.js"


router.post( "/", UsuarioController.criarUsuario);
router.get( "/", UsuarioController.listarUsuario);
router.delete( "/delete/account", authMiddleware, criarUsuarioAoLogin, UsuarioController.deletarContaCompleta);
router.get( "/:id", UsuarioController.listarUsuarioPorId);
router.patch( "/:id", UsuarioController.atualizarUsuario);
router.delete( "/:id", UsuarioController.deletarUsuario);



export default router;