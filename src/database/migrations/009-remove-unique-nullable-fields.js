'use strict';

export const up = async (queryInterface, Sequelize) => {
  try {
    await queryInterface.sequelize.query(`
      ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS UQ__usuarios__firebase_uid;
    `).catch(() => {});
    
    await queryInterface.sequelize.query(`
      ALTER TABLE usuarios DROP CONSTRAINT IF EXISTS UQ__usuarios__stripe_costumer_id;
    `).catch(() => {});
    
    console.log('Constraints removidas com sucesso');
  } catch (error) {
    console.log('Info: Constraints já foram removidas ou não existem', error.message);
  }
};

export const down = async (queryInterface, Sequelize) => {
  // Rollback não é necessário
};
