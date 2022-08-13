const Planets = require('../models/planets');
const Satellites = require('../models/satellites');

module.exports = {
    async POST(req, res) {
        const { planetId } = req.params;
        const { name, serial_number } = req.body;

        const planet = await Planets.findByPk(planetId);

        if (!planet) {
            res.send("Esse planeta não existe!");
        }

        const satellite = await Satellites.create({ name, serial_number, planetId });
        return res.json(satellite);
    },

    async GET(req, res) {
        const { planetId } = req.params;

        if (!planetId) {
            res.send("Este planeta não existe");
        }

        const satelite = await Satellites.findAll();
        
        const planet = await Planets.findByPk(
            planetId,
            { include: Satellites }
        );

        

        return res.json(planet);

    }
}