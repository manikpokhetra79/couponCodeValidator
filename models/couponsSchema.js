const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    minCartAmount: {
      type: Number,
      required: true,
    },
    couponType: {
      type: String,
      required: true,
    },
    // if type = flat coupon
    flatAmount: {
      type: Number,
    },
    // if %age coupon
    percentValue: {
      type: Number,
    },
    percentMaxDiscount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;
