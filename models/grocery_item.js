'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grocery_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Grocery_Item.init({
    name: DataTypes.STRING,
    section: DataTypes.STRING,
    checked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Grocery_Item',
  });
  return Grocery_Item;
};