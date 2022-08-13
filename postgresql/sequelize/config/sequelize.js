/* Agora temos outro arquivo de configuração que servirá para conversarmos com nosso banco */

const Sequelize = require('sequelize'); /* Importando o método sequelize */
const database = require('./config'); /* Importando o nosso banco */

const sequelize = new  Sequelize(database); 
/* Dizendo para o sequelize com qual banco ele irá conversar */

module.exports = sequelize;