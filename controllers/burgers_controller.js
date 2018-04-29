// Import Express
var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.create(
    ['burger_name'],
    [req.body.burger_name],
    function(data) {
      res.redirect('/');
    });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function() {
      res.redirect('/');
    }
  );
});

// Export routes for server.js to use
module.exports = router;
