const express = require('express');
const ElementService = require('../services/elements.service');
const validatorHandler = require("../middlewares/validator.handler");
const  { getElementById, updateElement, createElement} = require("../schemas/elements.schema");

const router = express.Router();
const {models} = require("../libs/sequelize");
const service = new ElementService(models.Element);
const {socket} = require("../socket");

router.get("/", async (req, res, next) => {
  const element  = await service.find();
  res.json(element);
});

router.get("/:elementId", 
  validatorHandler(getElementById, "params"),
  async (req, res, next) => {
    try {
      const {elementId} = req.params;
      const elements  = await service.findOneComplete(elementId);
      res.json(elements);
    } catch (error) {next(error)}
    
});

router.post("/", 
  validatorHandler(createElement, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newElement = await service.create(body);
      const rows = await service.find();
      socket.io.emit("element-change", rows)
      return res.status(201).json(newElement);
    } catch (error) { next(error)}
  })

router.patch("/:elementId",
  validatorHandler(getElementById, "params"),
  validatorHandler(updateElement, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { elementId } = req.params;
      const element = await service.update(elementId, body);
      const rows = await service.find();
      socket.io.emit("element-change", rows)
      res.json(element);
    } catch (error) { next(error) }
})

router.delete("/:elementId",
  validatorHandler(getElementById, "params"),
  async (req, res, next) => {
    try {
      const {elementId} = req.params;
      const rta = await service.delete(elementId);
      const rows = await service.find();
      socket.io.emit("element-change", rows)
      res.json(rta)
    } catch (error) {next(error)}
  }
)

module.exports = router;
