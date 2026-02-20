import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _competencias from  "../modules/competencias/models/competencias.js";
import _experienciasProfissionais from  "../modules/experiencia/models/experienciasProfissionais.js";
import _formacaoAcademica from  "../modules/formacao/models/formacaoAcademica.js";
import _usuario from  "../modules/usuario/models/usuario.js";
import _dadosPessoais from  "../modules/dadosPessoais/models/dadosPessoais.js";

export default function initModels(sequelize) {
  const usuario = _usuario.init(sequelize, DataTypes);
  const competencias = _competencias.init(sequelize, DataTypes);
  const experienciasProfissionais = _experienciasProfissionais.init(sequelize, DataTypes);
  const formacaoAcademica = _formacaoAcademica.init(sequelize, DataTypes);
  const dadosPessoais = _dadosPessoais.init(sequelize, DataTypes);

  competencias.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(competencias, { as: "competencia", foreignKey: "usuario_id"});
  experienciasProfissionais.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(experienciasProfissionais, { as: "experiencias_profissionais", foreignKey: "usuario_id"});
  formacaoAcademica.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(formacaoAcademica, { as: "formacao_academicas", foreignKey: "usuario_id"});
  dadosPessoais.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(dadosPessoais, { as: "dados_pessoais", foreignKey: "usuario_id"});

  return {
    usuario,
    competencias,
    experienciasProfissionais,
    formacaoAcademica,
    dadosPessoais,
  };
}
