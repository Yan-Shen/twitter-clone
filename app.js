const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
var morgan = require('morgan')
var bodyParser = require('body-parser');
var socketio = require('socket.io');
// ...

/////////////////////////////////////////////////////////////////////////////////////////////////
// nunjucks.configure('views', {
// 	autoescape: true,
// 	express: app,
// 	noCache: true
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
nunjucks.configure('views', { noCache: true })
////////////////////////////////////////////////////////////////////////////////////////////////
// app.listen(3000);
var server = app.listen(3000);
var io = socketio.listen(server);

// app.use(morgan('combined'));
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


app.use('/', routes(io));
app.get('/:product/:id', function (req, res){
	console.log(req.params.product +' ' + req.params.id)
	res.send('done');
})
// app.use('/', function(req, res, next) {
// 	console.log(req.method + ' ' + req.originalUrl);
// 	next();
// });

// app.get('/', function(req, res) {
// 	var locals = {
// 		title: 'An Example',
// 		people: [
// 				{ name: 'Gandalf'},
// 				{ name: 'Frodo' },
// 				{ name: 'Hermione'}
// 		]
// 	};
// 	// res.render('index',  locals, function(err, output) {
// 	//   res.send(output);
// 	// });
	// res.render('index',locals )
// })

// 	nunjucks.render('index.html', locals)
// })

// in some file that is in the root directory of our application... how about app.js?
