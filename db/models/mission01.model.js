const {Model, DataTypes, Sequelize} = require("sequelize");

const MISSION1_TABLE = "mission01";

const MissionSchema = {
  missionRowId: {
    primaryKey: true,
    field: 'mission_row_id',
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  altitud: {
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  gyroX: {
    field: 'gyro_X',
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  gyroY: {
    field: 'gyro_Y',
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  gyroZ: {
    field: 'gyro_Z',
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  acelX: {
    field: 'acel_X',
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  acelY: {
    field: 'acel_Y',
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  acelZ: {
    field: 'acel_Z',
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  temp: {
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  pres: {
    allowNull: false, 
    unique: false,
    type: DataTypes.DECIMAL(10,2),
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn("now"),
    field: "created_at",
  }
}

class Mission01 extends Model {
  static associate() {
    //
  }

  static config(sequelize) {
    return {
      sequelize, 
      tableName: MISSION1_TABLE,
      modelName: "Mission01",
      timestamp: false,
    }
  }
}

module.exports = {MISSION1_TABLE, Mission01, MissionSchema}