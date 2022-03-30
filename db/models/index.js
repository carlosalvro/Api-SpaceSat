const { MissionSchema, Mission } = require("./mission.model");
const { TeamSchema, Team } = require("./team.model");

function setupModels(sequelize) {
  Mission.init(MissionSchema, Mission.config(sequelize));
  Team.init(TeamSchema, Team.config(sequelize));
}

module.exports = setupModels;