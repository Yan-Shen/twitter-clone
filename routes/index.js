const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweet');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  var tweets = tweetBank.find( {name: name} );
  console.log(tweets);
  res.render( 'index', { tweets: tweets } );
});

router.get('/tweets/:id', function(req, res){
  var id = +req.params.id;
  console.log(id);
  var tweets = tweetBank.find( {id: id} );
  console.log(tweets);
  res.render( 'index', { tweets: tweets } );
})

module.exports = router;
