const { UsersSchema, User } = require("./users.model");
const { MissionSchema, Mission01 } = require("./mission01.model");

function setupModels(sequelize) {
  User.init(UsersSchema, User.config(sequelize));
  Mission01.init(MissionSchema, Mission01.config(sequelize));
}

module.exports = setupModels;