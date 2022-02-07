const express = require("express");

const UserService = require("./../services/users.service");
const validatorHandler = require("./../middlewares/validator.handler")
const {getUserByIdSchema, createUserSchema, updateUserSchema} = require("./../schemas/users.schema");

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:userId',
  validatorHandler(getUserByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const category = await service.findOne(userId);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
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

router.patch('/:userId',
  validatorHandler(getUserByIdSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const body = req.body;
      const category = await service.update(userId, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:userId',
  validatorHandler(getUserByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      await service.delete(userId);
      res.status(201).json({userId});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;