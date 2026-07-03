'use strict';

export const up = async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dados_pessoais', {
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
            nome: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            telefone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            endereco: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            idade: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            linkedin_url: {
                type: Sequelize.STRING,
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
    await queryInterface.dropTable('dados_pessoais');
};
