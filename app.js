/**
  * Reads the config files and starts the express server
  */
// var config = require('config');
var express = require('express');
var app = express();

app.use(express.static('app'));

app.get('/', function(req, res) {
  res.send("Hello");
});

// var hostname = config.util.getEnv('HOSTNAME');
// var portenv = config.util.getEnv('PORT');
// console.log('Host:' + hostname);
// console.log('Port: ' + portenv);

var server = app.listen(8080, function() {
  // var server = app.listen(process.env.PORT || 8080, function() {
  // var host = server.address().address;
  // var port = server.address().port;
  // console.log('server Host:' + host);
  // console.log('server Port: ' + port);
  console.log("Example app listening on port: " + "8080");
});
