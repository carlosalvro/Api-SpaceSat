const { MissionSchema, Mission } = require("./mission.model");

function setupModels(sequelize) {
  Mission.init(MissionSchema, Mission.config(sequelize));
}

module.exports = setupModels;