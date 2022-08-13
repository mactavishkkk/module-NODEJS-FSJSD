'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('satellites', {
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

      serial_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      /* Nossa tabela satellites precisa de um campo dizendo de qual planeta ele é
      Aqui temos ele */
      planetId:{
        type: Sequelize.INTEGER,
        references: { model: "planets", key: "id"}, // Assim fazemos nossa foreign key
        onUpdate: "CASCADE", // Aqui estamos falando que, quando alguma informação for atualizada
        onDelete: "CASCADE" // Seja aqui, ou em planets, ele irá replicar em todas as outras.
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
    await queryInterface.dropTable('satellites');
  }
};
