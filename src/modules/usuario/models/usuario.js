import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class usuario extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        firebase_uid: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
        },
        stripe_costumer_id: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
      },
      {
        sequelize,
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    );
  }
}
