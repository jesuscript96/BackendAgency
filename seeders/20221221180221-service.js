'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
      name: "seo optimization",
      description: "soy la descripción 1",
      type: "seo, sem",
      price: 600,
      img: "http//tal",
      available: true
    },
    {
      name: "Paid media campaign",
      description: "soy la descripción 2",
      type: "seo, sem",
      price: 500,
      img: "http//tal",
      available: true
    },
    {
      name: "Web development",
      description: "soy la descripción 3",
      type: "web",
      price: 700,
      img: "http//tal",
      available: true
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
