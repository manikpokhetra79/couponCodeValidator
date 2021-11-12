const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 8000;
const cors = require('cors');
const app = express();
const db = require('./config/mongoose');

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));
// start server
app.listen(port, () => {
  console.log('connected to server at port ', port);
});
