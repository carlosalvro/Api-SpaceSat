const Service = require('./Service');

class ElementService extends Service {
  constructor(model, elementName="Element") {
    super(model, elementName)
  }
    
}

module.exports = ElementService;