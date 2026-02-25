'use strict';

export const up = async (queryInterface, Sequelize) => {
    await queryInterface.createTable('experiencia_profissional', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      titulo_cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      localidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      data_fim: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      atual: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      sobre: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('experiencia_profissional');
};
