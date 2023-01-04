'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("companies", {
      id_company: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      mail: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      cif: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      userMail: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "mail"
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
