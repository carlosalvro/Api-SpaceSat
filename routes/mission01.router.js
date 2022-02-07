const express = require('express');

const MissionService = require('./../services/mission.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createMissionRowSchema } = require('./../schemas/mission01.schema');

const router = express.Router();
const service = new MissionService();

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
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;

