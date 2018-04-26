// Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: '',
    database: 'burgers_db'
});

// Make the connection to database
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;