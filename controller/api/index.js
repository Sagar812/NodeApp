const express = require('express');

const api = express.Router();
const v1 = require('./v1');

const bodyParser = require('body-parser');

//every api call first go through this middleware
api.use(bodyParser.json());

//after above middleware route will go to this path
api.use('/v1', v1);


module.exports = api;
