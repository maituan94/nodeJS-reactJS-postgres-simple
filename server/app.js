const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Ready',
}));

module.exports = app;