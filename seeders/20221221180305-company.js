'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      {
      mail: "empresa1@empresa.com",
      name: "empresa1",
      cif: "4362346B",
      phone: 603603603,
      city: "Valencia",
      sector: "Insurance",
      userMail: "lucas@gmail.com"
    },
    {
      mail: "empresa2@empresa.com",
      name: "empresa2",
      cif: "4362346B",
      phone: 603603603,
      city: "Valencia",
      sector: "Finance",
      userMail: "christian@gmail.com"
    },
    {
      mail: "empresa1@empresa.com",
      name: "empresa1",
      cif: "4362346B",
      phone: 603603603,
      city: "Valencia",
      sector: "Insurance",
      userMail: "marcos@gmail.com"
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


