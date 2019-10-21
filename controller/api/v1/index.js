const express = require('express');

const v1 = express.Router();

const user = require('./user');

v1.use('/users', user);

module.exports = v1;