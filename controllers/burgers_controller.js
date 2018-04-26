// Import Express
var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes
router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});




module.exports = router;


// Create the router for this app (probably learn about this in the Monday/Wednesday class)

