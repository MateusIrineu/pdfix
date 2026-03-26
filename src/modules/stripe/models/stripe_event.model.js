const { DataTypes } = require('sequelize');
const sequelize = require('../../../database');

const StripeEvent = sequelize.define('StripeEvent', {
  stripe_event_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  processed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'stripe_events',
  timestamps: true,
});

module.exports = StripeEvent;
