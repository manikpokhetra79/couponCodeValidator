const express = require('express');

const port = process.env.PORT || 8000;
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));
app.listen(port, () => {
  console.log('connected to server at port ', port);
});
