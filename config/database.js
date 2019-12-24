
const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = new Sequelize('opera', 'postgres', '123456', {
    dialect: 'postgres'
});