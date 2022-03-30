'use strict';

const { TeamSchema, TEAM_TABLE} = require("../models/team.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TEAM_TABLE, TeamSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TEAM_TABLE);
  }
};
