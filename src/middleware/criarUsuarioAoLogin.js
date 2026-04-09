import { models } from "../database/index.js";

const usuarioModel = models.usuario;

/**
 * Middleware que cria automaticamente um usuário no banco
 * quando ele realiza login via Firebase
 */
async function criarUsuarioAoLogin(req, res, next) {
  try {
    const decodedToken = req.user; // já foi verificado pelo authMiddleware
    const email = decodedToken.email;

    if (!email) {
      return res.status(400).json({ mensagem: "Email não encontrado no token Firebase" });
    }

    // Verificar se o usuário já existe
    let usuario = await usuarioModel.findOne({ where: { email } });

    // Se não existe, criar automaticamente
    if (!usuario) {
      usuario = await usuarioModel.create({
        nome: decodedToken.name || "Usuário",
        email: email,
        senha: "firebase", // Firebase gerencia a autenticação
        telefone: decodedToken.phone_number || "",
        endereco: "",
        idade: null,
        linkedin_url: ""
      });

      console.log(`✓ Novo usuário criado no banco: ${email}`);
    }

    // Adicionar usuário ao request para rotas posteriores
    req.usuarioDb = usuario;
    next();
  } catch (error) {
    console.error("Erro ao criar usuário ao login:", error);
    // Não bloqueia a requisição, apenas registra o erro
    next();
  }
}

export default criarUsuarioAoLogin;
