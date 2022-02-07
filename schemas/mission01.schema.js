const Joi = require('joi');

const id = Joi.number().integer();
const altitud = Joi.number();
const gyrox = Joi.number();
const gyroy = Joi.number();
const gyroz = Joi.number();
const acelx = Joi.number();
const acely = Joi.number();
const acelz = Joi.number();
const temp = Joi.number();
const pres = Joi.number();

const createMissionRowSchema = Joi.object({
  id: id,
  altitud: altitud.required(),
  gyrox: gyrox.required(),
  gyroy: gyroy.required(),
  gyroz: gyroz.required(),
  acelx: acelx.required(),
  acely: acely.required(),
  acelz: acelz.required(),
  temp: temp.required(),
  pres: pres.required(),
});


module.exports = { createMissionRowSchema }
