'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      events_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      event_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      event_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      event_end_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};