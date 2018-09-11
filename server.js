const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('/api/whoami', (req, res) => {
  res.status(200).json({
    ipaddress: req.connection.remoteAddress
      .split(':').pop(),
    language: req.headers['accept-language'] || '',
    software: req.headers['user-agent'],
  });
});

app.listen(8080, () => {
  console.log('Server running at: http://localhost:8080/');
});

module.exports = app;
