'use strict';

const { TeamSchema, TEAM_TABLE} = require("../models/team.model");
const { ElementSchema, ELEMENT_TABLE} = require("../models/elements.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TEAM_TABLE, TeamSchema);
    await queryInterface.createTable(ELEMENT_TABLE, ElementSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TEAM_TABLE);
    await queryInterface.dropTable(ELEMENT_TABLE);
  }
};
