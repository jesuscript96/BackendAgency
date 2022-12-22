'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pils', [
      {
      title: "title 1",
      text: "Soy la pil 1",
      type: "seo",
      img: "hhtp:talycual",
      creation_date: "2022-11-11",
      userMail: "adminseeder@admin.com"
    },
    {
      title: "title 2",
      text: "Soy la pil 2",
      type: "sem",
      img: "hhtp:talycual",
      creation_date: "2022-11-11",
      userMail: "adminseeder@admin.com"
    },
    {
      title: "title 3",
      text: "Soy la pil 3",
      type: "amazon",
      img: "hhtp:talycual",
      creation_date: "2022-11-11",
      userMail: "adminseeder@admin.com"
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
