require('dotenv').config({});

//requirements
const bodyParser = require('body-parser');
const express = require('express');

//init app
const app = express();

//routes
const index = require('./modules/routes/index');
const train = require('./modules/routes/train');

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//use routes
app.use('/', index);
app.use('/train', train);

//start server
const port = process.env.PORT;
const server = app.listen(port, () =>
  console.log('Server listening on port', server.address().port));
