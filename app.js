var express = require('express');
var routes = require('./routes/index');

var app = express();

app.use('/getPlayList', routes);

module.exports = app;
