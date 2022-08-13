const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize"); /* Importando o sequelize */

const Captains = sequelize.define('captains', {
    /* Definindo a estrutura desta tabela selecionada */
    name: DataTypes.STRING,
    cpf: DataTypes.STRING
});

module.exports = Captains;