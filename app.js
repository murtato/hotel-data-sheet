var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://localhost/hoteldatasheet');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(3000);
console.log('Port 3000 works! HURRAY!')
