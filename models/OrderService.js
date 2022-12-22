
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class OrderService extends Model { };

OrderService.init({
    // Model attributes are defined here
    id_ordersservices: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    orderIdOrder: {
        type: DataTypes.INTEGER
    },
    serviceIdService: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'orders_services',
    freezeTableName: true,
    timestamps: false
});

module.exports = OrderService;