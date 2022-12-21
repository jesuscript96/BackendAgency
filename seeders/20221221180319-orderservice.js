'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders_services', [
      {
        orderIdOrder: 1,
        serviceIdService: 1
      },
      {
        orderIdOrder: 2,
        serviceIdService: 2
      },
      {
        orderIdOrder: 2,
        serviceIdService: 3
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
