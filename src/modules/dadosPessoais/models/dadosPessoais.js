import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class dadosPessoais extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        dados_pessoais_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        usuario_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "usuario",
            key: "usuario_id",
          },
        },
        nome: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
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
      },
      {
        sequelize,
        tableName: "dados_pessoais",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "dados_pessoais_pkey",
            unique: true,
            fields: [{ name: "dados_pessoais_id" }],
          },
          {
            name: "idx_dados_pessoais_usuario",
            fields: [{ name: "usuario_id" }],
          },
        ],
      },
    );
  }
}
