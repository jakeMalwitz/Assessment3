var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var heroes = require('./routes/heroes');

//Middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Express Routes
app.use('/heroes', heroes);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

//Mongoose
var databaseUri = 'mongodb://localhost:27017/omicron';
mongoose.connect(databaseUri);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function(err) {
  console.log("Mongoose failed", err);
});

//Start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
  console.log("Listening on port: ", app.get('port'));
});
