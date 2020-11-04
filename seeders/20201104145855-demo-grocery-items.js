'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Grocery_Items",
      [
        {
            name:'milk',
            section: 'Dairy',
            checked: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name:'pear',
            section: 'Produce',
            checked: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name:'bread',
            section: 'Bread',
            checked: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
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
