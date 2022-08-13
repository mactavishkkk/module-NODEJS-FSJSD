'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('spaceships_captains', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      spaceshipId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "spaceships", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      captainId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "captains", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      createdAt: {
        type: Sequelize.DATE
      },

      updatedAt: {
        type: Sequelize.DATE
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('spaceships_captains');

  }
};
