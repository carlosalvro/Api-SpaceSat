const Joi = require("joi");

const userId = Joi.number().positive();
const user = Joi.string();
const role = Joi.string(); 
const password = Joi.string();

const getUserByIdSchema = Joi.object({
  userId: userId.required()
})

const createUserSchema = Joi.object({
  userId: userId,
  role: role,
  user: user.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  userId: userId,
  role: role,
  user: user,
  password: password
})

module.exports = {getUserByIdSchema, createUserSchema, updateUserSchema}