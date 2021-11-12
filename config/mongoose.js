const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/couponsGeneratorDB');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB error'));
db.once('open', () => {
  console.log('Database connected successfully at: ', process.env.PORT);
});
module.exports = db;
