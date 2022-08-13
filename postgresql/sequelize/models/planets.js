const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize"); /* Importando o sequelize */

/* Apontando para a tabela em nosso banco */
const Planets = sequelize.define('planets', {
/* Definindo a estrutura desta tabela selecionada */
    name: DataTypes.STRING,
    position: DataTypes.INTEGER
});

module.exports = Planets;