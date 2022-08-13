'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('captains', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      createdAt: {
        type: Sequelize.DATE
      },

      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('captains');
  }
};
