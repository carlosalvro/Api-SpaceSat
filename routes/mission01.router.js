const express = require('express');

const MissionService = require('./../services/mission.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createMissionRowSchema } = require('./../schemas/mission01.schema');

const router = express.Router();
const service = new MissionService();
const {socket} = require("../socket");

router.get('/', async (req, res, next) => {
  try {
    const missionRows = await service.find();
    res.json(missionRows);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createMissionRowSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRow = await service.create(body);
      const rows = await service.findLastOne();
      socket.io.emit("row-added", rows)
      res.status(201).json(newRow);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;

