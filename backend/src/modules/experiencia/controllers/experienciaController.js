import { models } from "../../../database/index.js";

const experienciaModel = models.experienciasProfissionais;

class ExperienciaController {
  static async criarExperiencia(req, res) {
    try {
      const {
        usuario_id,
        titulo_cargo,
        empresa,
        localidade,
        data_inicio,
        data_fim,
        atual,
        sobre,
      } = req.body;
      if (
        !usuario_id ||
        !titulo_cargo ||
        !empresa ||
        !localidade ||
        !data_inicio ||
        !data_fim ||
        !atual ||
        !sobre
      ) {
        return res
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatórios." });
      }

      const experiencia = await experienciaModel.create({
        usuario_id,
        titulo_cargo,
        empresa,
        localidade,
        data_inicio,
        data_fim,
        atual,
        sobre,
      });

      res.status(201).json({
        mensagem: "Experiencia Registrada com Sucesso!",
        experiencia: experiencia,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao Registrar Experiencia.",
        erro: error.message,
      });
    }
  }

  static async listarExperiencia(req, res) {
    try {
      const listarExperiencia = await experienciaModel.findAll();
      if (listarExperiencia.length === 0) {
        return res
          .status(200)
          .json({ mensagem: "Nenhuma experiencias registrada." });
      }
      res.status(200).json(listarExperiencia);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar Experiencias.",
        erro: error.message,
      });
    }
  }

  static async atualizarExperiencia(req, res) {
    try {
      const { experiencia_id } = req.params;
      const {
        usuario_id,
        titulo_cargo,
        empresa,
        localidade,
        data_inicio,
        data_fim,
        atual,
        sobre,
      } = req.body;

      const buscarId = await experienciaModel.findByPk(experiencia_id);
      if (!buscarId) {
        return res
          .status(404)
          .json({ mensagem: "Experiencia não encontrada." });
      }

      const experienciaAtualizada = {
        usuario_id,
        titulo_cargo,
        empresa,
        localidade,
        data_inicio,
        data_fim,
        atual,
        sobre,
      };
      await experienciaModel.update(experienciaAtualizada, {
        where: { experiencia_id },
      });
      res.status(200).json({
        mensagem: "Experiência atualizada com sucesso!",
        experiencias: experienciaAtualizada,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao buscar Experiência.",
        erro: error.message,
      });
    }
  }

  static async deletarExperiencias(req, res) {
    try {
      const { experiencia_id } = req.params;

      const experiencia = await experienciaModel.findByPk(experiencia_id);
      if (!experiencia) {
        return res
          .status(404)
          .json({ mensagem: "Experiência não encontrada para exclusão." });
      }
      await experiencia.destroy();
      res.status(200).json({
        mensagem: "Experiencia Deletada!",
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao excluir Experiência.",
        erro: error.message,
      });
    }
  }
  static async deletarTodasExperiencias(req, res) {
    try {
      await experienciaModel.truncate();
      res.status(200).json({
        mensagem: "Experiencias Deletadas com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao Deletar Formações.",
        erro: error.message,
      });
    }
  }
}

export default ExperienciaController;
