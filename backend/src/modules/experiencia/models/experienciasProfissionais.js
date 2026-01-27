import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class experiencia_profissional extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        experiencia_id: {
          defaultValue: DataTypes.UUIDV4,
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        usuario_id: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "usuario",
            key: "usuario_id",
          },
        },
        titulo_cargo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        empresa: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        localidade: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        data_inicio: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        data_fim: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        atual: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        sobre: {
          type: DataTypes.STRING(255),
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
        tableName: "experiencia_profissional",
        schema: "public",
        timestamps: false,
      },
    );
  }
}
