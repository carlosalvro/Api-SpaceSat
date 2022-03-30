const boom = require("@hapi/boom");

class Service {
  constructor(model, elementName='Element') {
    this.elementName = elementName
    this.model = model
  }

  async create(data) {
    const newElement = await this.model.create(data)
    return newElement
  }

  async find() {
    const rta = await this.model.findAll();
    return rta
  }

  async findOne(id) {
    const element = await this.model.findByPk(id);
    if (!element) {
      throw boom.notFound(`${this.elementName} not found`)
    }
    return element
  }

  async update(id, changes) {
    const element = await this.findOne(id);
    const rta = await element.update(changes);
    return rta
  }

  async delete(id) {
    const element = await this.findOne(id);
    await element.destroy();
    return {id};
  }
}

module.exports = Service