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
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { list: list } );
});

router.get('/tweets/:id', function(req, res){
  var id = req.params.id;
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { list: list } );
})

module.exports = router;
