const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('*', (req, res) => {
  console.log('GET /' + req.path);
  res.sendFile(path.join(__dirname.split('\\publish')[0], req.path));
});
