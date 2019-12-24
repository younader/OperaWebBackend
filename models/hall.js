const {Model, DataTypes} = require('sequelize');
const db = require("../config/database");

class Hall extends Model {
}

Hall.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numOfRows:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    numOfColumns:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize: db,
    modelName: "Halls"
});



module.exports = Hall;