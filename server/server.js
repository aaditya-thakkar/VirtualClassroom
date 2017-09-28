const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const user_routes = require('./routes');
const db = require('../config/db');

const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    user_routes(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});


