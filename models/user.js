
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class User extends Model {};

User.init({
    // Model attributes are defined here
    mail: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
          isEmail: true,
          len: [1, 100]
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 45]
        }
      },
    phone: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.BOOLEAN
    },
    client: {
        type: DataTypes.BOOLEAN
    }
  }, {
    sequelize, 
    modelName: 'users',
    freezeTableName: true,
    timestamps: false
  });

  module.exports = User;