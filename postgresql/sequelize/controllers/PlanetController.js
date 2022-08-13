const Planet = require('../models/planets');

module.exports = {
    // Se tratando de um metodo post, ele esperará por dados inseridos pelo usuário
    // Esse é o papel do nosso 'req', também utilizamos o 'res' para criar uma 'saida' para o usuário
    async POST(req, res) {
        const { name, position } = req.body;

        const planet = await Planet.create({ name, position })
        return res.json(planet);
    },

    // Se tratando do nosso método get, nos apenas precisamos exibir dados
    // Por isso só utilizamos o 'res'.
    async GET(req, res) {
        const planets = await Planet.findAll();
        return res.json(planets);
    },

    async PUT(req, res) {
        const { name, size, position } = req.body;
        await Planet.update(
            { name, size, position },
            { where: { id: req.params.id } }
        )
        return res.send('Planeta atualizado.');
    },

    async DELETE(req, res) {
        const deletePlanet = await Planet.destroy({
            where : { id: req.params.id }
        });

        return res.json(deletePlanet);

    }
}

/*
Tudo o que temos aqui abaixo é as requisições da nossa API de forma 'bruta'

(async () => {
    // INSERT INTO ---
    // Referenciando a tabela que será modificada
    const Planets = require('../models/planets');

      // Atribuindo as informações
     const newPlanet = await Planets.create({
         name: "SUN",
         position: 0
     });
 
     const Satellites = require('./models/satellites'); 
     // Atribuindo as informações
     const newSatellte = await Satellites.create({
         name: "A451JKL",
         launch: '1921-09-09'
     });
 
     // SELECT ---
     // Todos os planetas
     const printPlanets = await Planets.findAll();
 
     // Planeta específico ID
     const printPlanet = await Planets.findByPk(1);
 
    // NAME
     const X = await Planets.findAll({
         where: {
             name: 'Saturn'
         }
     }); 

    // UPDATE ---
    const updatePlanet = await Planets.findByPk(6);
    updatePlanet.name = "Jupter";
    await updatePlanet.save();

    console.log(updatePlanet);
     

    // DELETE ---
    const deletePlanet = await Planets.findByPk(7);
    deletePlanet.name = "Jupter";
    await deletePlanet.destroy();

    console.log(deletePlanet);

})(); // Executando esta async function anonimamente
*/