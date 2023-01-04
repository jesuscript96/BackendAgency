'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
      mail: "adminseeder@admin.com",
      password: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoicHJ1ZWJhQHBydWViYS5jb20iLCJjcmVhdGVkIjoxNjY5MzIxOTY1MDgzLCJyb2xlIjpudWxsLCJpYXQiOjE2NjkzMjE5NjV9.0tjohjU4gE2HBljk9fdKnmYKnLVlchH7vI-WZl3TFN4",
      name: "jesus",
      roleIdRole: 1,
      phone: 603603603,
      client: false
    },
    {
      mail: "christian@gmail.com",
      password: "eyyyyy2",
      name: "christian",
      phone: 603603603,
      roleIdRole: 2,
      client: true
    },
    {
      mail: "marcos@gmail.com",
      password: "eyyyyy2",
      name: "marcos",
      phone: 603603603,
      roleIdRole: 2,
      client: false
    },
    {
      mail: "lucas@gmail.com",
      password: "Lucas55555",
      name: "lucas",
      phone: 603603603,
      roleIdRole: 2,
      client: false
    },
    {
      mail: "rodrigo@gmail.com",
      password: "eyyyyy2",
      name: "rodrigo",
      phone: 603603603,
      roleIdRole: 2,
      client: false
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
