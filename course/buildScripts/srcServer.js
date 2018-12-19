// var express = require('express');
// var path = require('path');
// var open = require('open');
import express from 'express';
import path from 'path';
import open from 'open';

// var port = 3000;
// var app = express();
const port = 3000;
const app = express();

app.get('/', function (req, res) {
  console.log(console)
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
