const express = require('express');

const users = express.Router();
const models = require('../../../../models');

users.use((req, res, next) => {
    next();
});

users.post('/', (req, res) => {
    models.User.insertUser(req.body).then(user => {
        if(user) {
            res.send({
                message: "User Inserted Successfully...!",
                body: user,
            })
        }
    }).catch(err => {
        res.send(err);
    });
});

module.exports = users;