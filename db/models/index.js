const { MissionSchema, Mission } = require("./mission.model");
const { TeamSchema, Team } = require("./team.model");
const { ElementSchema , Element } = require("./elements.model");

function setupModels(sequelize) {
  Mission.init(MissionSchema, Mission.config(sequelize));
  Team.init(TeamSchema, Team.config(sequelize));
  Element.init(ElementSchema, Element.config(sequelize));
}

module.exports = setupModels;