'use strict';

const {UsersSchema, USERS_TABLE} = require("../models/users.model");
const { MissionSchema, MISSION1_TABLE} = require("../models/mission01.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USERS_TABLE, UsersSchema);
    await queryInterface.createTable(MISSION1_TABLE, MissionSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(USERS_TABLE);
    await queryInterface.drop(MISSION1_TABLE);
  }
};
