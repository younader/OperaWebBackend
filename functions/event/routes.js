module.exports = (app) => {
    const controller = require('./controller');

    app.delete('/event/:eventId',controller.deleteEvent);

    app.post('/event', controller.addEvent);
    
    app.get('/event',controller.getEvents);
    app.get('/eventname',controller.getEventName);
}