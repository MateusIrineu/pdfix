import { models } from "../../../database/index.js";

const dadosPessoaisModel = models.dadosPessoais;

class DadosPessoaisController {
  // Criar dados pessoais
  static async criarDadosPessoais(req, res) {
    try {
      const { usuario_id, nome, email, telefone, endereco, idade, linkedin_url } = req.body;

      // Validação dos campos obrigatórios
      if (!usuario_id || !nome || !email) {
        return res.status(400).json({ 
          mensagem: "Os campos usuario_id, nome e email são obrigatórios." 
        });
      }

      // Criar dados pessoais (permite múltiplos registros por usuário)
      const dadosPessoais = await dadosPessoaisModel.create({
        usuario_id,
        nome,
        email,
        telefone,
        endereco,
        idade,
        linkedin_url,
      });

      res.status(201).json({
        mensagem: "Dados pessoais criados com sucesso!",
        dados: dadosPessoais,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao criar dados pessoais",
        erro: error.message,
      });
    }
  }

  // Listar todos os dados pessoais
  static async listarDadosPessoais(req, res) {
    try {
      const dadosPessoais = await dadosPessoaisModel.findAll({
        order: [["criado_em", "DESC"]],
      });

      res.status(200).json(dadosPessoais);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao listar dados pessoais",
        erro: error.message,
      });
    }
  }

  // Buscar dados pessoais por ID
  static async buscarDadosPessoaisPorId(req, res) {
    try {
      const { dados_pessoais_id } = req.params;

      const dadosPessoais = await dadosPessoaisModel.findByPk(dados_pessoais_id);

      if (!dadosPessoais) {
        return res.status(404).json({ 
          mensagem: "Dados pessoais não encontrados" 
        });
      }

      res.status(200).json(dadosPessoais);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao buscar dados pessoais",
        erro: error.message,
      });
    }
  }

  // Buscar dados pessoais por usuário (retorna todos os registros)
  static async buscarDadosPessoaisPorUsuario(req, res) {
    try {
      const { usuario_id } = req.params;

      const dadosPessoais = await dadosPessoaisModel.findAll({
        where: { usuario_id },
        order: [["criado_em", "DESC"]],
      });

      res.status(200).json(dadosPessoais);
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao buscar dados pessoais do usuário",
        erro: error.message,
      });
    }
  }

  // Atualizar dados pessoais
  static async atualizarDadosPessoais(req, res) {
    try {
      const { dados_pessoais_id } = req.params;
      const { nome, email, telefone, endereco, idade, linkedin_url } = req.body;

      const dadosPessoais = await dadosPessoaisModel.findByPk(dados_pessoais_id);

      if (!dadosPessoais) {
        return res.status(404).json({ 
          mensagem: "Dados pessoais não encontrados" 
        });
      }

      // Atualizar campos
      await dadosPessoais.update({
        nome: nome || dadosPessoais.nome,
        email: email || dadosPessoais.email,
        telefone: telefone !== undefined ? telefone : dadosPessoais.telefone,
        endereco: endereco !== undefined ? endereco : dadosPessoais.endereco,
        idade: idade !== undefined ? idade : dadosPessoais.idade,
        linkedin_url: linkedin_url !== undefined ? linkedin_url : dadosPessoais.linkedin_url,
        atualizado_em: new Date(),
      });

      res.status(200).json({
        mensagem: "Dados pessoais atualizados com sucesso!",
        dados: dadosPessoais,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao atualizar dados pessoais",
        erro: error.message,
      });
    }
  }

  // Deletar dados pessoais
  static async deletarDadosPessoais(req, res) {
    try {
      const { dados_pessoais_id } = req.params;

      const dadosPessoais = await dadosPessoaisModel.findByPk(dados_pessoais_id);

      if (!dadosPessoais) {
        return res.status(404).json({ 
          mensagem: "Dados pessoais não encontrados" 
        });
      }

      await dadosPessoais.destroy();

      res.status(200).json({
        mensagem: "Dados pessoais deletados com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao deletar dados pessoais",
        erro: error.message,
      });
    }
  }

  // Deletar todos os dados pessoais de um usuário
  static async deletarDadosPessoaisPorUsuario(req, res) {
    try {
      const { usuario_id } = req.params;

      const resultado = await dadosPessoaisModel.destroy({
        where: { usuario_id },
      });

      if (resultado === 0) {
        return res.status(404).json({ 
          mensagem: "Nenhum dado pessoal encontrado para este usuário" 
        });
      }

      res.status(200).json({
        mensagem: `${resultado} registro(s) deletado(s) com sucesso!`,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro ao deletar dados pessoais do usuário",
        erro: error.message,
      });
    }
  }
}

export default DadosPessoaisController;
