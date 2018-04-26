// Referenced 17-MVC Exercise from class
// Import the ORM to create functions that interact with database
var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Exports the database functions for the controller (burgers_controller.js)
module.exports = burger;