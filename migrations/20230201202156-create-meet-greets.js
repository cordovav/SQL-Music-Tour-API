'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greets_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Events',
          key: 'events_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      band_id: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Band',
          key: 'bands_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      meet_greet_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mg_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      genre: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      mg_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      mg_end_time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};