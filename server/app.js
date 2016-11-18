var http = require ('http');         // For serving a basic web page.
var express = require('express');
var mongoose = require ('mongoose'); // The reason for this demo.

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/HelloMongoose';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;
var x;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    x = 'error';
  } else {
    console.log ('Succeeded connected to: ' + uristring);
    x = 'alt ok'
  }
});

var app = express();

// Welcome to mLab.  Your new subscription is being created and will be available shortly.  Please consult the mLab Add-on Admin UI to check on its progress.
// Created mongolab-fluffy-38351 as MONGODB_URI
// Use heroku addons:docs mongolab to view documentation

app.get('/', function(req,res) {
  res.send('Hello ' + x);
});

app.get('/test', function(req,res) {
  res.send('test')
});

app.listen(theport, function(err) {
  console.log('open on port: ' + theport);
})