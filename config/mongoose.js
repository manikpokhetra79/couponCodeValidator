const mongoose = require('mongoose');
const uri = process.env.COUPON_URI;
const db = mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Atlas database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// // mongoose.connect('mongodb://localhost/couponsGeneratorDB');
// // const db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'DB error'));
// // db.once('open', () => {
// //   console.log('Database connected successfully at: ', process.env.PORT);
// // });
// // module.exports = db;
