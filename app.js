const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');


const app = express();
app.use(cors());
app.use(bodyParser.json());

require('./functions/user/routes')(app);
require('./functions/hall/routes')(app);
require('./functions/event/routes')(app);
require('./functions/hall/routes')(app);


// Database
const db = require('./config/database');
const User = require("./models/user")
const Hall = require('./models/hall')
const Event = require('./models/event')
const Reservation = require('./models/reservation')



// Testing Database Connection
db.authenticate()
    .then(() =>{               
        db.sync({force: true})
//true to reset
        console.log("Postgres connected...")
    })
    .catch((err) => console.log(err));

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
    console.log(`Listening on port ${port}...`)
);


module.exports = server;
