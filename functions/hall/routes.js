module.exports = (app) => {
    const controller = require('./controller');

    app.delete('/hall/:hallId',controller.deleteHall);

    app.post('/hall', controller.addHall);
    
    app.get('/hall',controller.getHalls);
    app.get('/hallname',controller.getHallName);
}