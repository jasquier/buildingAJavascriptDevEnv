/*
  This is not an actual production server. This is just useful for hosting
  the minified production build locally for debugging purposes.
*/

/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import chalk from 'chalk';
import opn from 'opn';
import compression from 'compression';

// TODO learn express
const port = 3000;
const app = express();

app.use(compression()); // enable gzip compression in express!!
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(chalk.blue('Listening on port ' + port));
    opn('http://localhost:' + port);
  }
});
