'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tire.belongsTo(models.Car, {
        foreignKey: 'carId',
      })
    }
  }
  Tire.init({
    name: {
      type: DataTypes.ENUM('MICHELIN', 'BFGOODRICH', 'BRIDGESTONE', 'CONTINENTAL', 'DUNLOP TIRES', 'FALKEN TIRES', 'FIRESTONE',
       'GENERAL TIRE', 'GOODYEAR', 'HANKOOK', 'KELLY TIRES', 'NITTO', 'PIRELLI', 'TOYO TIRES', 'UNIROYAL', 'YOKOHAMA'),
      defaultValue: 'MICHELIN'
    },
    price: DataTypes.INTEGER,
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cars',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Tire',
  });
  return Tire;
};