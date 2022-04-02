const Joi = require("joi");

const elementId = Joi.number().positive()
const element = Joi.string()
const shortName = Joi.string()
const description = Joi.string()
const dataType = Joi.string().valid("INT", "DECIMAL")
const graph = Joi.string()

const getElementById = Joi.object({
  elementId: elementId.required()
})

const createElement = Joi.object({
  elementId: elementId,
  element: element.required(),
  shortName: shortName.required(),
  description: description,
  dataType: dataType.required(),
  graph: graph.required(),
})

const updateElement = Joi.object({
  elementId: elementId,
  element: element,
  shortName: shortName,
  description: description,
  dataType: dataType,
  graph: graph,
})

module.exports = { getElementById, createElement,updateElement}

