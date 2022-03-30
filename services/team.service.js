const Service = require('./Service');

class TeamService extends Service {
  constructor(model, elementName="Team") {
    super(model, elementName)
  }
    
}

module.exports = TeamService;