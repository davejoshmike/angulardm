/**
  * Reads the config files and starts the express server,
  * serving files from public/...
  */
var express = require('express');

// Serve static files from public/...
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');S
});

// Load variables from config
var config = require('config');

var hostname = config.get('HOSTNAME');
var port = config.get('PORT');

// Start the server
var server = app.listen(port || 8080, function() {
  console.log("Example app listening on port: " + server.address().port);
});
