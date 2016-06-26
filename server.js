// making node package requirements
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express config.
var app = express();
var PORT = process.env.PORT || 1000;

//using BodyParser to more easily interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//router set-up
require('./app/public/api-routes.js')(app);
require('./app/public/html-routes.js')(app);

//listener
app.listen(PORT, function(){
	console.log('Listening on port '+ PORT);
});