'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Store_Sections",
      [
        {
          name:'Produce',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Bakery',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Deli',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Dairy',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Frozen',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Bread',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Beverages',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Breakfast',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Condiments and Dressings',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Cooking and Baking',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Grains and Pasta',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Snacks',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'International',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Canned Food',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Beer, Wine and Spirits',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name:'Miscellaneous',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
    ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
