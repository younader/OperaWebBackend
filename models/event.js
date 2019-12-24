const {Model, DataTypes} = require('sequelize');
const db = require("../config/database");
const Hall = require('./hall');

class Event extends Model {
}

Event.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    time:{
        type: DataTypes.STRING,
        allowNull: true
    },
    ticketPrice:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: "EVENTS"
});

Event.belongsTo(Hall, {
    through:'hall-events',
    foreignKey: 'hallId'
});

module.exports = Event;