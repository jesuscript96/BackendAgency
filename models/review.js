
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Review extends Model { };

Review.init({
    // Model attributes are defined here
    id_review: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    },
    creation_date: {
        type: DataTypes.DATEONLY
    }
}, {
    sequelize,
    modelName: 'reviews',
    freezeTableName: true,
    timestamps: false
});

module.exports = Review;