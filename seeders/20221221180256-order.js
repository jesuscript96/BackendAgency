'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
      order_date: "2022-11-11",
      userMail: "christian@gmail.com"
    },
    {
      order_date: "2022-11-11",
      userMail: "christian@gmail.com"
    },
    {
      order_date: "2022-11-11",
      userMail: "christian@gmail.com"
    }
    
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
