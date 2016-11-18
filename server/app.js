var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

app.get('/', function(req,res) {
	res.send('Hello');
});

app.get('/test', function(req,res) {
	res.send('test')
});

app.listen(port, function(err) {
	console.log('open on port: ' + port);
})