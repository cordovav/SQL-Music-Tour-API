'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('event_band_times', {
      event_band_times_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      event_id: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Events',
          key: 'event_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      available_start_time: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Band',
          key: 'available_start_time'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      end_time: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Band',
          key: 'end_time'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      event_start_time: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Events',
          key: 'event_start_time'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      event_end_time: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Events',
          key: 'event_end_time'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      mg_start_time: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Meet_greets',
          key: 'mg_start_time'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      mg_end_time: {
        type: Sequelize.INTEGER,
        references :{
          model: 'Meet_greets',
          key: 'mg_end_time'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('event_band_times');
  }
};