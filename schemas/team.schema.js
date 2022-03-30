const Joi = require("joi");

const team = Joi.string()
const description = Joi.string()
const teamId = Joi.number().positive()

const getTeamById = Joi.object({
  teamId: teamId.required()
})

const createTeam = Joi.object({
  teamId: teamId,
  team: team.required(),
  description: description,
})

const updateTeam = Joi.object({
  teamId: teamId,
  team: team,
  description: description,
})

module.exports = { getTeamById, createTeam,updateTeam}

