'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: 'Paul Sink',
          username: 'psink',
          password: '$2a$10$9rLKwJ39Y//vVmPLidytFeiTlIbbsThvSSwCZqOVI8QuALebEzd9e',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name: 'test',
          username: 'test',
          password: '$2a$10$9rLKwJ39Y//vVmPLidytFeiTlIbbsThvSSwCZqOVI8QuALebEzd9e',
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
