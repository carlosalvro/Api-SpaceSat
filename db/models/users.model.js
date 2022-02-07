const {Model, DataTypes} = require("sequelize");

const USERS_TABLE = "users";

const UsersSchema = {
  userId: {
    primaryKey: true,
    field: 'users_id',
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  role: {
    allowNull: false, 
    unique: false,
    defaultValue: "user",
    type: DataTypes.STRING,
  },
  user: {
    allowNull: false, 
    unique: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.CHAR
  }
}

class User extends Model {
  static associate() {
    //
  }

  static config(sequelize) {
    return {
      sequelize, 
      tableName: USERS_TABLE,
      modelName: "User",
      timestamp: false,
    }
  }
}

module.exports = {USERS_TABLE, UsersSchema, User}