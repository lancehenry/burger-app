// Import MySQL connection
var connection = require('../config/connection.js');

// Helper function from 17-MVC Example exercise (SQL syntax)
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

// Helper function to convert object key/value pair to SQL syntax
function objToSql(ob) {
  var arr = [];

  // Loop through the keys and push the key/value as a string to arr
  for (var key in ob) {
    var value = ob[key];

    //Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }
  return arr.toString();
}

// Object for all our SQL statement functions (17-MVC Exercise)
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cd(result);
    });
  },
  insertOne: function(table, cols, vals, cd) {
    var queryString = 'INSERT INTO ' + table;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cd(result);
    });
  },
  updateOne: function(table, objColVals, condition, cd) {
    var queryString = 'UPDATE ' + table;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cd(result);
    });
  }
};

// Export the ORM object for the model (burger.js)
module.exports = orm;
