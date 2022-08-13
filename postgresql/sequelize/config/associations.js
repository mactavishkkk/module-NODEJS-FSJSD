// Para PK e FK temos este arquivo para associarmos ambos.

const Planets = require('../models/planets');
const Satellites = require('../models/satellites');
const Spaceships = require('../models/spaceships');
const Captains = require('../models/captains');

Planets.hasMany(Satellites, { onDelete: "CASCADE", onUpdate: "CASCADE" })// Novamente vinculando-os com um formato em cascata.
Satellites.belongsTo(Planets, { foreingkey: "planetId", as: "planet" });

Spaceships.belongsToMany(Captains, {
    foreingkey: "spaceshipId",
    through: "spaceships_captains",
    as: "captains"
});

Captains.belongsToMany(Spaceships, {
    foreingkey: "captainId",
    through: "spaceships_captains",
    as: "spaceships"
});

module.exports = { Planets, Satellites };