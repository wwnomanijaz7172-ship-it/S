const express = require('express');
const { use } = require('react');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('aj kya kya chal raha hai');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

});
