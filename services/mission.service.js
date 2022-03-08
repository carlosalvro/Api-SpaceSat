const {models} = require("./../libs/sequelize");

class MissionService {
  constructor() {}

  async create(data) {
    const newUser = await models.Mission.create(data);
    return newUser;
  }

  async find() {
    const rta  = await models.Mission.findAll();
    return rta;
  }

  async findLastOne() {
    const rta  = await models.Mission.findOne({
      order: [["createdAt", "DESC"]],
    });
    return rta;
  }
}

module.exports = MissionService;