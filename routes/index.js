const express = require("express");

const usersRouter = require("../routes/users.router");
const mission01Router = require("./mission01.router");
const authRouter = require("./auth.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", usersRouter);
  router.use("/mission01", mission01Router);
  router.use("/auth", authRouter);
}

module.exports = routerApi;