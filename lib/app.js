const express = require('express');
const app = express();

const dogs = [
  { name: 'Corbin', age: 5, weight: '98lbs' },
  { name: 'Nolan', age: 14, weight: '45lbs' },
  { name: 'Magic', age: 12, weight: '105lbs' },
];

app.use(express.static('./public'));

app.get('/api/v1/dogs', (req, res) => {
  res.send(dogs);
});

module.exports = app;
