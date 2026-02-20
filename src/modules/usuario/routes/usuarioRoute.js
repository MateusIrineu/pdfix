import express from "express"
const router = express.Router()

import UsuarioController from "../controllers/usuarioController.js"


router.post( "/", UsuarioController.criarUsuario);
router.get( "/", UsuarioController.listarUsuario);
router.get( "/:id", UsuarioController.listarUsuarioPorId);
router.patch( "/:id", UsuarioController.atualizarUsuario);
router.delete( "/:id", UsuarioController.deletarUsuario);



export default router;