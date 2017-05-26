/**
  * Reads the config files and starts the express server
  */
// var config = require('config');
//var path = require('path');
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');S
});

// var hostname = config.util.getEnv('HOSTNAME');
// var portenv = config.util.getEnv('PORT');
// console.log('Host:' + hostname);
// console.log('Port: ' + portenv);

var server = app.listen(process.env.PORT || 8080, function() {
  // var server = app.listen(process.env.PORT || 8080, function() {
  // var host = server.address().address;
  // var port = server.address().port;
  // console.log('server Host:' + host);
  // console.log('server Port: ' + port);
  console.log("Example app listening on port: " + server.address().port);
});
