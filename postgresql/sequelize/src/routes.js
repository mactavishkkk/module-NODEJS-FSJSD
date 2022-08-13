const express = require('express');
const routes = express.Router();

const PlanetController = require('../controllers/PlanetController');
const SatelliteController = require('../controllers/SatelliteController');

const SpaceshipController = require('../controllers/SpaceshipController');
const CaptainController = require('../controllers/CaptainController');

routes.post('/postplanets', PlanetController.POST);
routes.get('/getplanets', PlanetController.GET);
routes.put('/putplanets/:id', PlanetController.PUT);
routes.delete('/delplanets/:id', PlanetController.DELETE);

routes.post('/postplanets/:planetId/satellites', SatelliteController.POST);
routes.get('/getplanets/:planetId/satellites', SatelliteController.GET);

routes.post('/postcaptains', CaptainController.POST);
routes.get('/getcaptains', CaptainController.GET);

routes.put('/putcaptains/:id', CaptainController.PUT);
routes.delete('/delcaptains/:id', CaptainController.DELETE);

routes.post('/postspaceships/:captainId/spaceships', SpaceshipController.POST);
routes.get('/getspaceships/:captainId/spaceships', SpaceshipController.GET);

routes.put('/putspaceships/:id', SpaceshipController.PUT);
routes.delete('/delspaceships/:id', SpaceshipController.DELETE);

module.exports = routes;