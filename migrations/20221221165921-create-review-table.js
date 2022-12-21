'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id_review: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
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
      },
      serviceIdService: {
        type: Sequelize.INTEGER,
        references: {
          model: "services",
          key: "id_service"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

