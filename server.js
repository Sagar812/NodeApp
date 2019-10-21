const express = require('express');

const app = express();
const api = require('./controller/api');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.use('/', (req, res) => {
    res.send("Welcome to My Project");
});

const server = app.listen(3005,() => {
    console.log("Server running on port 3005");
})

