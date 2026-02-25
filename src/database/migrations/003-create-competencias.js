'use strict';

export const up = async (queryInterface, Sequelize) => {
    await queryInterface.createTable('competencias', {
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
      nome_competencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nivel_proficiencia: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao: {
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
  await queryInterface.dropTable('competencias');
};
