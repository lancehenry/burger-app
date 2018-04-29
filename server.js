// Dependencies
// Watched the catsApp video to finish this project! Got it working!
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

// parse application
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Method Override (via: 14.3 Cats App video)
app.use(methodOverride('_method'));

// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

var PORT = process.env.PORT || 3306;
app.listen(PORT);

// app.listen(PORT, function() {
//   console.log('App listening at localhost: ' + PORT);
// });