const express = require('express');
const app = express();




app.listen(3000, function() {
	console.log('listening on port 3000');
});

app.use('/', function(req, res, next) {
	// console.log(req.url);
	// console.log(req.)
	console.log(req.method + ' ' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.send('your route is working..');
});

