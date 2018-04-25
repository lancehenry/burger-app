// Import Express
// Import burger.js

// Create the router for this app (probably learn about this in the Monday/Wednesday class)
// Export the router

var express = require('express');
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burger')
})