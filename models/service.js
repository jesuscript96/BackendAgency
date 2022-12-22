
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Service extends Model { };

Service.init({
    // Model attributes are defined here
    id_service: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    img: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'services',
    freezeTableName: true,
    timestamps: false
});

module.exports = Service;