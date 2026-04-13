import { models } from "../../../database/index.js";

const usuarioModel = models.usuario;
const dadosPessoaisModel = models.dadosPessoais;
const competenciasModel = models.competencias;
const experienciaModel = models.experienciasProfissionais;
const formacaoModel = models.formacaoAcademica;

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

      const usuarioRetorno = await usuarioModel.findByPk(usuario.id, {
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
        where: { id: id },
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

      // Fazer UPDATE para marcar como deletado
      await usuarioModel.update(
        { deletedAt: new Date() },
        { where: { id: id }, individualHooks: true },
      );

      res.status(200).json({ mensagem: "Usuário excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao excluir usuário.",
        erro: error.message,
      });
    }
  }

  /**
   * Cria ou retorna um usuário quando ele realiza login via Firebase + Google
   * Salva automaticamente as informações do login no banco
   */
  static async criarOuRecuperarUsuarioFirebase(req, res) {
    try {
      const decodedToken = req.user; // Já foi verificado pelo authMiddleware
      const email = decodedToken.email;

      if (!email) {
        return res.status(400).json({
          mensagem: "Email não encontrado no token Firebase",
        });
      }

      // Verificar se o usuário já existe
      let usuario = await usuarioModel.findOne({ where: { email } });

      // Se não existe, criar automaticamente com dados do Firebase
      if (!usuario) {
        usuario = await usuarioModel.create({
          nome: decodedToken.name || "Usuário",
          email: email,
          firebase_uid: decodedToken.uid,
        });

        return res.status(201).json({
          mensagem: "Usuário criado com sucesso via Firebase",
          usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
          },
        });
      }

      res.status(200).json({
        mensagem: "Usuário recuperado com sucesso",
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        },
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao processar login",
        erro: error.message,
      });
    }
  }

  static async deletarContaCompleta(req, res) {
    try {
      const { email } = req.user; // Email do token Firebase
      // Encontrar o usuário pelo email
      const usuario = await usuarioModel.findOne({ where: { email } });

      if (!usuario) {
        return res.status(404);
      }

      const usuarioId = usuario.id;

      // Deletar todos os dados relacionados em cascata
      try {
        // Dados Pessoais
        await dadosPessoaisModel.destroy({ where: { usuario_id: usuarioId } });

        // Competências
        await competenciasModel.destroy({ where: { usuario_id: usuarioId } });

        // Experiência Profissional
        await experienciaModel.destroy({ where: { usuario_id: usuarioId } });

        // Formação Acadêmica
        await formacaoModel.destroy({ where: { usuario_id: usuarioId } });

        // Deletar o usuário (soft delete - UPDATE deletedAt)
        const agora = new Date();
        await usuarioModel.update(
          { deletedAt: agora },
          { where: { id: usuarioId } },
        );

        res.status(200).json({});
      } catch (dbError) {
        // Se o banco falhar, retornamos sucesso para que o cliente delete do Firebase
        // e o usuário receba feedback de que sua conta foi marcada para deleção
        res.status(200).json({});
      }
    } catch (error) {
      res
        .status(500)
        .json({ erro: "Erro ao deletar conta", detalhes: error.message });}
    }
  }
}

export default UsuarioController;
