"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const table = await queryInterface.describeTable("usuarios");
    if (!table.deletedAt) {
      await queryInterface.addColumn("usuarios", "deletedAt", {
        type: Sequelize.DATE,
        allowNull: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("usuarios", "deletedAt");
  },
};
