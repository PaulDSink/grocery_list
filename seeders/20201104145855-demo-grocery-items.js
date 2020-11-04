'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Grocery_Items",
      [
        {
            name:'milk',
            checked: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
            sectionId: 4,
        },
        {
            name:'pear',
            checked: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
            sectionId: 1,
        },
        {
            name:'bread',
            checked: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
            sectionId: 6,
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
