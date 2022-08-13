/* Arquivo padrão de conexão com nome, endereço, usuário, senha, nome do banco */

module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "123",
    database: "curso_sequelize",
    define: {
        timestamps: true
    },
};