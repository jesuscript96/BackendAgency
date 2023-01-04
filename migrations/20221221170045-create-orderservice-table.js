'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("orders_services", {
      id_ordersservices: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      orderIdOrder: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id_order"
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        allowNull: false
      },
      serviceIdService: {
        type: Sequelize.INTEGER,
        references: {
          model: "services",
          key: "id_service"
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
