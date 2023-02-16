'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.ENUM('MICHELIN', 'BFGOODRICH', 'BRIDGESTONE', 'CONTINENTAL', 'DUNLOP TIRES', 'FALKEN TIRES', 'FIRESTONE',
        'GENERAL TIRE', 'GOODYEAR', 'HANKOOK', 'KELLY TIRES', 'NITTO', 'PIRELLI', 'TOYO TIRES', 'UNIROYAL', 'YOKOHAMA'),
       defaultValue: 'MICHELIN'
      },
      price: {
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Cars',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tires');
  }
};