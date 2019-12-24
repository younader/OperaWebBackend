const {Model, DataTypes} = require('sequelize');
const db = require("../config/database");

class User extends Model {
}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, role: {
        type: DataTypes.ENUM("0", "1", "2"),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pending: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: true
    }
}, {
    sequelize: db,
    modelName: "Users"
});

module.exports = User;