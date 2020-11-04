'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: 'Paul Sink',
          username: 'psink',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name: 'test',
          username: 'test',
          password: 'test',
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
