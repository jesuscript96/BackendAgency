'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
      text: "Soy la review del servicio 1",
      rating: 5,
      creation_date: "2022-11-11",
      userMail: "christian@gmail.com",
      serviceIdService: 1
    },
    {
      text: "Soy la review del servicio 2",
      rating: 4,
      creation_date: "2022-11-11",
      userMail: "christian@gmail.com",
      serviceIdService: 2
    },
    {
      text: "Soy la review del servicio 3",
      rating: 3,
      creation_date: "2022-11-11",
      userMail: "christian@gmail.com",
      serviceIdService: 3
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
