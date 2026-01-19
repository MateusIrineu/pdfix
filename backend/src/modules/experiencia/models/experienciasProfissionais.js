import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class experiencias_profissionais extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    experiencia_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'usuario_id'
      }
    },
    titulo_cargo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    empresa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    localidade: {
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
    atual: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    responsabilidades: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conquistas: {
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
    tableName: 'experiencias_profissionais',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "experiencias_profissionais_pkey",
        unique: true,
        fields: [
          { name: "experiencia_id" },
        ]
      },
      {
        name: "idx_experiencia_usuario",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
  }
}
