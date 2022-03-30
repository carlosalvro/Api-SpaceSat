const express = require('express');
const TeamService = require('../services/team.service');
const validatorHandler = require("../middlewares/validator.handler");
const  { getTeamById, createTeam,updateTeam} = require("../schemas/team.schema");

const router = express.Router();
const {models} = require("../libs/sequelize");
const service = new TeamService(models.Team);

router.get("/", async (req, res, next) => {
  const team  = await service.find();
  res.json(team);
});

router.get("/:areaId", 
  validatorHandler(getTeamById, "params"),
  async (req, res, next) => {
    try {
      const {teamId} = req.params;
      const teams  = await service.findOneComplete(teamId);
      res.json(teams);
    } catch (error) {next(error)}
    
});

router.post("/", 
  validatorHandler(createTeam, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTeam = await service.create(body);
      res.status(201).json(newTeam);
    } catch (error) { next(error)}
  })

router.patch("/:teamId",
  validatorHandler(getTeamById, "params"),
  validatorHandler(updateTeam, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { teamId } = req.params;
      const team = await service.update(teamId, body);
      res.json(team);
    } catch (error) { next(error) }
})

router.delete("/:teamId",
  validatorHandler(getTeamById, "params"),
  async (req, res, next) => {
    try {
      const {teamId} = req.params;
      const rta = await service.delete(teamId);
      res.json(rta)
    } catch (error) {next(error)}
  }
)

module.exports = router;
