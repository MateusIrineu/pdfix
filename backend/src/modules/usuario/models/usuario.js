import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class usuario extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        usuario_id: {
          type: DataTypes.UUIDV4,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: "usuario_email_key",
        },
        senha: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        telefone: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        endereco: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        idade: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        linkedin_url: {
          type: DataTypes.STRING(255),
          allowNull: true,
          validate: {
            isUrl: true,
          },
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
        deletado_em: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        sequelize,
        tableName: "usuario",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "usuario_email_key",
            unique: true,
            fields: [{ name: "email" }],
          },
          {
            name: "usuario_pkey",
            unique: true,
            fields: [{ name: "usuario_id" }],
          },
        ],
      },
    );
  }
}
