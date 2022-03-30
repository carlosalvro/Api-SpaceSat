const {Model, DataTypes} = require("sequelize");

const TEAM_TABLE = "team";

const TeamSchema = {
  teamId: {
    primaryKey: true,
    field: 'team_id',
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  team: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  }
}

class Team extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAM_TABLE,
      modelName: "Team",
      timestamp: false,
    }
  }
}
module.exports = {TEAM_TABLE, Team, TeamSchema}