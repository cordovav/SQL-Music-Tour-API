'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stages_events', {
      stages_events_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id:  {
        type: Sequelize.INTEGER,
        references :{
          model: 'Stages',
          key: 'stage_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      event_id:  {
        type: Sequelize.INTEGER,
        references :{
          model: 'Events',
          key: 'events_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stages_events');
  }
};