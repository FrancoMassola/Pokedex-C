//require environment variables
const config = require('./data.env');

//require express module
const express = require('express');

//run express module
const app = express();

require ('./database');

//convert server data to json object
app.use(express.json());

//set routes to the server
app.use('/api',require('./routes/index'));

//set port 
app.listen(3000);
console.log('Server on port', config.PORT);