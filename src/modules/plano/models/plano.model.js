import { DataTypes } from 'sequelize';
import sequelize from '../../../database/index.js';

const Plano = sequelize.define('Plano', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_link_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  access_key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'Planos',
  timestamps: true,
});

export default Plano;
