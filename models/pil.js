
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Pil extends Model { };

Pil.init({
    // Model attributes are defined here
    id_pil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    },
    text: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    creation_date: {
        type: DataTypes.DATEONLY
    }
}, {
    sequelize,
    modelName: 'pils',
    freezeTableName: true,
    timestamps: false
});

module.exports = Pil;