const {Model, DataTypes} = require("sequelize");

const ELEMENT_TABLE = "elements";

const ElementSchema = {
  elementRowId: {
    primaryKey: true,
    field: 'element_row_id',
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  element: {
    allowNull: false, 
    unique: true,
    type: DataTypes.STRING,
  },
  shortName: {
    field: 'short_name',
    allowNull: false, 
    unique: true,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: true, 
    unique: false,
    type: DataTypes.TEXT,
  },
  dataType: {
    field: 'data_type',
    allowNull: false, 
    unique: false,
    type: DataTypes.ENUM(["INT", "DECIMAL"]),
  },
  graph: {
    allowNull: false, 
    unique: false,
    type: DataTypes.STRING,
  },
}

class Element extends Model {
  static associate() {
    //
  }

  static config(sequelize) {
    return {
      sequelize, 
      tableName: ELEMENT_TABLE,
      modelName: "Element",
      timestamp: false,
    }
  }
}

module.exports = {ELEMENT_TABLE, Element, ElementSchema}