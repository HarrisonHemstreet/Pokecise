const express = require('express');

const app = express();

app.get('/pokemon', (req, res) => {
  return res.send('🆑🆑🆑🆑🆑🆑🆑🆑');
})






app.listen(5000, function () {
  console.log('App on port 5000');
})