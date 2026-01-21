import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class formacaoAcademica extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    formacao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'usuario_id'
      }
    },
    instituicao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    curso: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nivel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    area_estudo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    data_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    concluido: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    criado_em: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    atualizado_em: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'formacao_academica',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "formacao_academica_pkey",
        unique: true,
        fields: [
          { name: "formacao_id" },
        ]
      },
      {
        name: "idx_formacao_usuario",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
  }
}
