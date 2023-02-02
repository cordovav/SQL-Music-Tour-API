'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_greets.init({
    meet_greet_id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    event_id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mg_start_time:{ 
      type: DataTypes.DATE,
      allowNull: false,
    },
    mg_end_time:{
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Meet_greets',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_greets;
};