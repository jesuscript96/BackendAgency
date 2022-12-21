
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Company extends Model { };

Company.init({
    // Model attributes are defined here
    id_company: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
            isEmail: true,
            len: [1, 100]
        },
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
    },
    cif: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    sector: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'companies',
    freezeTableName: true,
    timestamps: false
});

module.exports = Company;