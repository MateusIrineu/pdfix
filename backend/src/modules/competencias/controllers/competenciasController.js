import { models } from "../../../database/index.js";

const competenciasModel = models.competencias;

class CompetenciaController {
    static async criarCompetencia(req, res) {
        try {
            const { usuario_id, nome_competencia, categoria, nivel_proficiencia, anos_experiencia, descricao,  } = req.body;

            if ( !usuario_id || !nome_competencia || !categoria || !nivel_proficiencia || !anos_experiencia || !descricao ) {
                return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
            }

            const competencia = await competenciasModel.create(
                usuario_id,
                nome_competencia,
                categoria,
                nivel_proficiencia,
                anos_experiencia,
                descricao,
            );
            return res.status(200).json({
                mensagem: "Competência criada com sucesso!",
                competencia: competencia,
            });
        } catch (error) {
            return res.status(500).json({
                mensagem: "Erro ao cadastrar competência.",
                erro: error.message,
            });
        }
    }

    static async listarCompetencias(req, res) {
        try {
            const listarCompetencias = await competenciasModel.findAll();

            if (listarCompetencias.length === 0) {
                return res.status(200).json({ mensagem: "Nenhuma competência encontrada." });
            }
            return res.status(200).json(listarCompetencias);
        } catch (error) {
            return res.status(500).json({
                mensagem: "Erro ao listar competências.",
                erro: error.message,
            });
        }
    }

    static async atualizarCompetencia(req, res) {
        try {
            const { competencia_id } = req.params;
            const buscarId = await competenciasModel.findByPk(competencia_id);
            if (!buscarId) {
                return res.status(400).json({ mensagem: "ID da competência é obrigatório." });
            }
            const { usuario_id, nome_competencia, categoria, nivel_proficiencia, anos_experiencia, descricao } = req.body;

            const atualizarCompetencia = await competenciasModel.update(
                {
                    usuario_id,
                    nome_competencia,
                    categoria,
                    nivel_proficiencia,
                    anos_experiencia,
                    descricao,
                },
                { where: { competencia_id } }
            );
            return res.status(200).json({
                mensagem: "Competência atualizada com sucesso!",
                competencia: atualizarCompetencia,
            });
        } catch (error) {
            return res.status(500).json({
                mensagem: "Erro ao atualizar competência.",
                erro: error.message,
            });
        }
    }

        static async deletarCompetencias(req, res) {
            try {
                await competenciasModel.destroy();
                return res.status(200).json({ mensagem: "Competência deletada com sucesso!" });
            } catch (error) {
                return res.status(500).json({
                    mensagem: "Erro ao deletar competência.",
                    erro: error.message,
                });
            }
    }
}

export default CompetenciaController;