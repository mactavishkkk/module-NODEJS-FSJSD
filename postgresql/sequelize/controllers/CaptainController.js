const Captain = require('../models/captains');

module.exports = {
    // Se tratando de um metodo post, ele esperará por dados inseridos pelo usuário
    // Esse é o papel do nosso 'req', também utilizamos o 'res' para criar uma 'saida' para o usuário
    async POST(req, res) {
        const { name, cpf } = req.body;

        const captain = await Captain.create({ name, cpf })
        return res.json(captain);
    },

    // Se tratando do nosso método get, nos apenas precisamos exibir dados
    // Por isso só utilizamos o 'res'.
    async GET(req, res) {
        const captains = await Captain.findAll();
        return res.json(captains);
    },

    async PUT(req, res) {
        const { name, size, cpf } = req.body;
        await Captain.update(
            { name, size, cpf },
            { where: { id: req.params.id } }
        )
        return res.send('Captain atualizada.');
    },

    async DELETE(req, res) {
        const deleteCaptain = await Captain.destroy({
            where : { id: req.params.id }
        });

        return res.json(deleteCaptain);

    }
}