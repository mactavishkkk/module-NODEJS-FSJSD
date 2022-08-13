const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize"); /* Importando o sequelize */

const Spaceships = sequelize.define('spaceships', {
    /* Definindo a estrutura desta tabela selecionada */
    name: DataTypes.STRING,
    serial_number: DataTypes.INTEGER
});

module.exports = Spaceships;