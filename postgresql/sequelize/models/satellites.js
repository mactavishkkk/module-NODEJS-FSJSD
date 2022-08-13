const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize"); /* Importando o sequelize */

const Satellites = sequelize.define('satellites', {
    /* Definindo a estrutura desta tabela selecionada */
    name: DataTypes.STRING,
    serial_number: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER
});

module.exports = Satellites;