// Create web server
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var comments = [];
var fs = require('fs');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});