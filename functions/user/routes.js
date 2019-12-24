module.exports = (app) => {
    const controller = require('./controller');

    app.delete('/user/:userId',controller.deleteUser);

    app.put('/:userId',controller.changeUser);

    app.post('/user', controller.addUser);
    
    app.get('/user',controller.getUsers);
    app.get('/usermail',controller.getUserEmail);
    app.get('/username',controller.getUserName);
}