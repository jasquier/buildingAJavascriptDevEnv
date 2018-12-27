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

app.get('/users', function (req, res) {
  // Pretend this hits a real database
  res.json([{
      "id": 1,
      "firstName": "Bob",
      "lastName": "Smith",
      "email": "bob@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Tammy",
      "lastName": "Norton",
      "email": "tnorton@yahoo.com"
    },
    {
      "id": 3,
      "firstName": "Tina",
      "lastName": "Lee",
      "email": "lee.tina@hotmail.com"
    }
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(chalk.blue('Listening on port ' + port));
    opn('http://localhost:' + port);
  }
});
