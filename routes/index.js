
// module.exports = router;

module.exports = function (io) {
  const express = require('express');
  const router = express.Router();

  const tweetBank = require('../tweet');

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets } );
    io.sockets.emit('connect');
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    console.log(name);
    var tweets = tweetBank.find( {name: name} );
    console.log(tweets);
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get('/tweets/:id', function(req, res){
    var id = +req.params.id;
    console.log(id);
    var tweets = tweetBank.find( {id: id} );
    console.log(tweets);
    res.render( 'index', { tweets: tweets } );
  });

  router.post('/users/:name', function(req, res) {
    tweetBank.add(req.body.name, req.body.text);
    io.sockets.emit('newTweet', {name: req.body.name, content: req.body.text});
    res.redirect('/');
  });

  return router;
};
