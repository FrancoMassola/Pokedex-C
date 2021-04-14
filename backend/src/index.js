//require express module
const express = require('express');

//run express module
const app = express();
require ('./database');
app.listen(3000);
console.log('Server on port', 3000);