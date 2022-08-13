const Spaceship = require('../models/spaceships');
const Captain = require('../models/captains');

module.exports = {
    // Se tratando de um metodo post, ele esperará por dados inseridos pelo usuário
    // Esse é o papel do nosso 'req', também utilizamos o 'res' para criar uma 'saida' para o usuário
    async POST(req, res) {
        const { captainId } = req.params;
        const { name, serial_number } = req.body;

        const captain = await Captain.findByPk(captainId);

        if (!captain) {
            res.send('Error, this captain does not exist!');
        }

        const [spaceships] = await Spaceship.findOrCreate({
            where: { name, serial_number }
        })

        await Captain.addSpaceship(spaceships);
    },

    // Se tratando do nosso método get, nos apenas precisamos exibir dados
    // Por isso só utilizamos o 'res'.
    async GET(req, res) {
        const { captainId } = req.params;

        const captain = await Captain.findByPk(captainId, {
            include: { association: 'spaceships' }
        });

        return res.json(captain);
    },

    async PUT(req, res) {
        const { name, size, serial_number } = req.body;
        await Spaceship.update(
            { name, size, serial_number },
            { where: { id: req.params.id } }
        )
        return res.send('Spaceship atualizada.');
    },

    async DELETE(req, res) {
        const deleteSpaceship = await Spaceship.destroy({
            where: { id: req.params.id }
        });

        return res.json(deleteSpaceship);

    }
}
