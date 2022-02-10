const boom = require("@hapi/boom");

const {models} = require("./../libs/sequelize");

class MissionService {
  constructor() {}

  async create(data) {
    const newUser = await models.Mission01.create(data);
    return newUser;
  }

  async find() {
    const rta  = await models.Mission01.findAll();
    return rta;
  }

  async findLastOne() {
    const rta  = await models.Mission01.findOne({
      order: [["createdAt", "DESC"]],
    });
    return rta;
  }
}

module.exports = MissionService;