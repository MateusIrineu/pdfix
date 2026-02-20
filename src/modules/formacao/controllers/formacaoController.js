import { models } from "../../../database/index.js";

const formacaoModel = models.formacaoAcademica;
const usuarioModel = models.usuario;

class FormacaoController {
  static async criarFormacaoAcademica(req, res) {
    try {
      const {
        usuario_id,
        instituicao,
        curso,
        nivel,
        area_estudo,
        data_inicio,
        data_fim,
        concluido,
        descricao,
      } = req.body;

      if (!usuario_id || !instituicao || !curso) {
        return res.status(400).json({
          mensagem: "usuario_id, instituicao e curso são obrigatórios.",
        });
      }

      const usuario = await usuarioModel.findByPk(usuario_id);
      if (!usuario) {
        return res.status(400).json({ mensagem: "Usuário não encontrado." });
      }

      const formacao = await formacaoModel.create({
        usuario_id,
        instituicao,
        curso,
        nivel,
        area_estudo,
        data_inicio,
        data_fim,
        concluido,
        descricao,
      });

      const formacaoRetorno = await formacaoModel.findByPk(
        formacao.formacao_id,
      );

      return res.status(200).json({
        mensagem: "Formação acadêmica criada com sucesso!",
        formacao: formacaoRetorno,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao cadastrar usuário.",
        erro: error.message,
      });
    }
  }

  static async listarFormacoes(req, res) {
    try {
      const listarFormacao = await formacaoModel.findAll();

      if (!listarFormacao || listarFormacao === 0) {
        res.status(200).json({
          mensagem: "Nenhuma formação encontrada.",
          erro: error.message,
        });
      }

      res.status(200).json(listarFormacao);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar Formações.",
        erro: error.message,
      });
    }
  }

  static async listarFormacaoPorId(req, res) {
    try {
      const { formacao_id } = req.params;

      const buscarId = await formacaoModel.findByPk(formacao_id);
      if (!buscarId) {
        res.status(400).json({
          mensagem: "Formação não encontrada.",
        });
      }

      res.status(200).json({
        mensagem: "Formação encontrada com sucesso!",
        buscarId: buscarId,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar usuários.",
        erro: error.message,
      });
    }
  }

  static async atualizarFormacao(req, res) {
    try {
      const { formacao_id } = req.params;

      const buscarId = await formacaoModel.findByPk(formacao_id);
      if (!buscarId) {
        return res.status(404).json({ mensagem: "Formação não encontrado." });
      }

      const {
        instituicao,
        curso,
        nivel,
        area_estudo,
        data_inicio,
        data_fim,
        concluido,
        descricao,
      } = req.body;

      const dadosAtualizados = {
        instituicao,
        curso,
        nivel,
        area_estudo,
        data_inicio,
        data_fim,
        concluido,
        descricao,
      };
      await formacaoModel.update(dadosAtualizados, {
        where: { formacao_id },
      });

      const formacaoAtualizada = await formacaoModel.findByPk(formacao_id);

      res.status(200).json({
        mensagem: "Formação atualizada com sucesso!",
        formacao: formacaoAtualizada,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar usuários.",
        erro: error.message,
      });
    }
  }

  static async deletarFormacao(req, res) {
    try {
      const { formacao_id } = req.params;

      const formacao = await formacaoModel.findByPk(formacao_id);
      if (!formacao) {
        return res.status(404).json({ mensagem: "Formação não encontrado." });
      }

      await formacao.destroy();
      res.status(200).json({
        mensagem: "Formação Deletada com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar usuários.",
        erro: error.message,
      });
    }
  }

  static async deletarTodasFormacoes(req, res) {
    try {
      await formacaoModel.truncate();
      res.status(200).json({
        mensagem: "Formações Deletadas com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao Deletar Formações.",
        erro: error.message,
      });
    }
  }
}

export default FormacaoController;
