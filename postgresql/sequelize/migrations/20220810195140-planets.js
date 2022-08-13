/* 
Aqui temos uma migration, que fara os nosso 'CREATE, INSERT, UPDATE E ETC';
Temos dois metodos, o primeiro é o up, onde inserimos informações no banco, nesse por exemplo estamos criando uma tabela
Depois temos o DOWN, que removerá informações da nossa tabela, esse por exemplo dropa a nossa tabela quando chamado. 
*/

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("planets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE
      },

       updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("planets");
  }
};
