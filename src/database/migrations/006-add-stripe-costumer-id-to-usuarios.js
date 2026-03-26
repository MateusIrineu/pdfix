"use strict";

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.addColumn("usuarios", "stripe_costumer_id", {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn("usuarios", "stripe_costumer_id");
};
