import { models } from "../../../database/index.js";

const usuarioModel = models.usuario;

class UsuarioController {
  static async criarUsuario(req, res) {
    try {
      const { nome, email, senha, telefone, endereco, idade, linkedin_url } =
        req.body;
      if (
        !nome ||
        !email ||
        !telefone ||
        !endereco ||
        !idade ||
        !linkedin_url
      ) {
        return res
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios." });
      }

      const usuario = await usuarioModel.create(
        nome,
        email,
        senha,
        telefone,
        endereco,
        idade,
        linkedin_url,
        { exclude: [senha] },
      );

      const usuarioExistente = await usuarioModel.findOne({ where: { email } });
      if (usuarioExistente) {
        return res
          .status(400)
          .json({ mensagem: "E-mail já cadastrado no sistema." });
      }

      res.status(201).json({
        mensagem: "Usuário Criado com Sucesso!",
        usuario: usuario,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao cadastrar usuário.",
        erro: error.message,
      });
    }
  }
  static async listarUsuario(req, res) {
    try {
      const listarUsuario = await usuarioModel.findAll({
        attributes: { exclude: ["senha"] },
      });
      if (listarUsuario.length === 0) {
        return res.status(200).json({ mensagem: "Nenhum usuário encontrado." });
      }

      res.status(200).json(listarUsuario);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar usuários.",
        erro: error.message,
      });
    }
  }
  static async listarUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuarioModel.findByPk(id, {
        attributes: { exclude: [senha] },
      });
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao buscar usuário.",
        erro: error.message,
      });
    }
  }
  static async atualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, tipo_usuario } = req.body;

      const usuario = await usuarioModel.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
      }
      const dadosAtualizados = { nome, email, senha, tipo_usuario };
      await usuarioModel.update(dadosAtualizados, { where: { id } });

      const usuarioAtualizado = await usuarioModel.findByPk(id, {
        attributes: { exclude: ["senha"] },
      });

      res.status(200).json({
        mensagem: "Usuário atualizado com sucesso!",
        usuario: usuarioAtualizado,
      });
    } catch (error) {}
    res.status(500).json({
      mensagem: "Erro ao buscar usuário.",
      erro: error.message,
    });
  }
  static async deletarUsuario(req, res) {
    try {
      const { id } = req.params;

      const usuario = await usuarioModel.findByPk(id);
      if (!usuario) {
        return res
          .status(404)
          .json({ mensagem: "Usuário não encontrado para exclusão." });
      }

      await usuario.destroy();

      res.status(200).json({ mensagem: "Usuário excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao excluir usuário.",
        erro: error.message,
      });
    }
  }
}

export default UsuarioController;
