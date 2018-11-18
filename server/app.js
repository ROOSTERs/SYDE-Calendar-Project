const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app.use(favicon(path.join(__dirname, '../client', 'img', 'favicon.ico')));
app.use('/', express.static(path.join(__dirname, '../client')));

app.listen(3000, () => {
  console.log('Listening...');
});
