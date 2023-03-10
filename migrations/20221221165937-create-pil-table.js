'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("pils", {
      id_pil: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      creation_date: {
        type: Sequelize.DATEONLY
      },
      userMail: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "mail"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
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
