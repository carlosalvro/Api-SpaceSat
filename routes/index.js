const express = require("express");

const missionRouter = require("./mission.router");
const teamRouter = require("./team.router");
const elementRouter = require("./elements.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/mission", missionRouter);
  router.use("/team", teamRouter);
  router.use("/elements", elementRouter);
}

module.exports = routerApi;