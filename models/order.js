
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Order extends Model { };

Order.init({
    // Model attributes are defined here
    id_order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    order_date: {
        type: DataTypes.DATEONLY
    },
    userMail: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'orders',
    freezeTableName: true,
    timestamps: false
});

module.exports = Order;