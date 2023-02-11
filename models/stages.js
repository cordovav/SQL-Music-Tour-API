'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Events, Stages_events }) {
      Stage.belongsToMany(Events, {
        foreignKey: "stage_id",
        as: "events",
        through: "Stages_events"
      })
    }
  }
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stage_location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stage_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });
  return Stage;
};