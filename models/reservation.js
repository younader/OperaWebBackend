const {Model, DataTypes} = require('sequelize');
const db = require("../config/database");
const Hall = require('./hall');
const User = require('./user');
const Event = require('./event');

class Reservation extends Model {

}

Reservation.init({
    numberOfSeats:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seats:{
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: "Reservations"
});

Reservation.belongsTo(Hall, {
    through:'hall-res',
    foreignKey: 'hallId'
});

Reservation.belongsTo(User, {
    through:'user-res',
    foreignKey: 'userId'
});

Reservation.belongsTo(Event, {
    through:'event-res',
    foreignKey: 'eventId'
});



module.exports = Reservation;