'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Cars', [{
      name: 'Forester',
      model: '2.5i premium',
      year: 2016,
      color: 'Black',
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {})
  }
};
