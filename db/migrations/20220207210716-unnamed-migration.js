'use strict';

const { MissionSchema, MISSION_TABLE} = require("../models/mission.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(MISSION_TABLE, MissionSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(MISSION_TABLE);
  }
};
