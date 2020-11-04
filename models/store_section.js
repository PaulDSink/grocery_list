'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store_Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Store_Section.hasMany(models.Grocery_Item, { foreignKey: 'sectionId' });
    }
  };
  Store_Section.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store_Section',
  });
  return Store_Section;
};