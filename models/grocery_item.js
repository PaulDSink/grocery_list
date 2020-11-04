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
      Grocery_Item.belongsTo(models.User, { foreignKey: 'userId'});
      Grocery_Item.belongsTo(models.Store_Section, { foreignKey: 'sectionId'});
    }
  };
  Grocery_Item.init({
    name: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    sectionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Grocery_Item',
  });
  return Grocery_Item;
};