"use strict";

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("stripe_events", {
    stripe_event_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    processed_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("stripe_events");
};
