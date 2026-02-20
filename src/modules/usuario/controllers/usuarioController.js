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
        !senha ||
        !telefone ||
        !endereco ||
        !idade ||
        !linkedin_url
      ) {
        return res
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios." });
      }

      const usuarioExistente = await usuarioModel.findOne({ where: { email } });
      if (usuarioExistente) {
        return res
          .status(400)
          .json({ mensagem: "E-mail já cadastrado no sistema." });
      }

      const usuario = await usuarioModel.create({
        nome,
        email,
        senha,
        telefone,
        endereco,
        idade,
        linkedin_url,
      });

      const usuarioRetorno = await usuarioModel.findByPk(usuario.usuario_id, {
        attributes: { exclude: ["senha"] },
      });

      res.status(201).json({
        mensagem: "Usuário Criado com Sucesso!",
        usuario: usuarioRetorno,
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
      if (!listarUsuario || listarUsuario.length === 0) {
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
        attributes: { exclude: ["senha"] },
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
      const { nome, email, senha, telefone, endereco, idade, linkedin_url } =
        req.body;

      const usuario = await usuarioModel.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
      }

      if (email && email !== usuario.email) {
        const outro = await usuarioModel.findOne({ where: { email } });
        if (outro) {
          return res
            .status(400)
            .json({ mensagem: "E-mail já cadastrado por outro usuário." });
        }
      }

      const dadosAtualizados = {
        nome: nome ?? usuario.nome,
        email: email ?? usuario.email,
        senha: senha ?? usuario.senha,
        telefone: telefone ?? usuario.telefone,
        endereco: endereco ?? usuario.endereco,
        idade: idade ?? usuario.idade,
        linkedin_url: linkedin_url ?? usuario.linkedin_url,
      };

      await usuarioModel.update(dadosAtualizados, {
        where: { usuario_id: id },
      });

      const usuarioAtualizado = await usuarioModel.findByPk(id, {
        attributes: { exclude: ["senha"] },
      });

      res.status(200).json({
        mensagem: "Usuário atualizado com sucesso!",
        usuario: usuarioAtualizado,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao buscar usuário.",
        erro: error.message,
      });
    }
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
