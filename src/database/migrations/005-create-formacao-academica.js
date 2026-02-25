'use strict';

export const up = async (queryInterface, Sequelize) => {
    await queryInterface.createTable('formacao_academica', {
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
      curso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instituicao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nivel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      data_conclusao: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cursando: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
  await queryInterface.dropTable('formacao_academica');
};
