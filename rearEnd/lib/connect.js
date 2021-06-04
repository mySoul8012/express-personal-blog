let config = require("./config.js")
let mongoose = require('mongoose');

mongoose.connect(config.url, { useNewUrlParser: true } );

var db = mongoose.connection;

module.exports = mongoose;