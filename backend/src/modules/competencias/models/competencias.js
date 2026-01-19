import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class competencias extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        competencia_id: {
          autoIncrement: true,
          type: DataTypes.UUIDV4,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        usuario_id: {
          type: DataTypes.UUIDV4,
          allowNull: false,
          references: {
            model: "usuario",
            key: "usuario_id",
          },
        },
        nome_competencia: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        categoria: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        nivel_proficiencia: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        anos_experiencia: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        descricao: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        criado_em: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        atualizado_em: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        sequelize,
        tableName: "competencias",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "competencias_pkey",
            unique: true,
            fields: [{ name: "competencia_id" }],
          },
          {
            name: "idx_competencia_usuario",
            fields: [{ name: "usuario_id" }],
          },
        ],
      },
    );
  }
}
