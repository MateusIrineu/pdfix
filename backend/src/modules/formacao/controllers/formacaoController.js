import { models } from "../../../database/index.js";

const formacaoModel = models.formacaoAcademica;

class FormacaoController {
  static async criarFormacaoAcademica(req, res) {
    try {
      const {usuario_id,  instituicao, curso, nivel, area_estudo } = req.body;

      const formacao = await formacaoModel.create(
        usuario_id,
        instituicao,
        curso,
        nivel,
        area_estudo,
      );

      return res.status(200).json({
        mensagem: "Formação acadêmica criada com sucesso!",
        formacao: formacao,
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

      if (listarFormacao === 0) {
        res.status(400).json({
          mensagem: "Nenhuma formação encontrada.",
          erro: error.message,
        });
      }

      res.status(200).json(listarFormacao);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar usuários.",
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
          erro: error.message,
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
      const buscarId = await form.findByPk(formacao_id);
      if (!buscarId) {
        return res.status(404).json({ mensagem: "Formação não encontrado." });
      }
      const formacaoAtualizada = { instituicao, curso, nivel, area_estudo };
      const { instituicao, curso, nivel, area_estudo } = req.body;

      const attFormacao = await formacaoModel.update(formacaoAtualizada, {
        where: { formacao_id },
      });

      res.status(200).json({
        mensagem: "Formação atualizada com sucesso!",
        formacao: attFormacao,
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
      if (!formacao_id) {
        return res.status(404).json({ mensagem: "Formação não encontrado." });
      }

      await formacao.destroy();
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar usuários.",
        erro: error.message,
      });
    }
  }

  static async deletarTodasFormacoes(req, res) {
    try {
      await formacaoModel.destroy();
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar usuários.",
        erro: error.message,
      });
    }
  }
}

export default FormacaoController;
