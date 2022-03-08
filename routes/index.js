const express = require("express");

const missionRouter = require("./mission.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/mission", missionRouter);
}

module.exports = routerApi;