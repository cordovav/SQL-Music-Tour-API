'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event_band_times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event_band_times.init({
    event_band_times_id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mg_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mg_end_time:{ 
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event_band_times',
    tableName: 'event_band_times',
    timestamps: false
  });
  return Event_band_times;
};