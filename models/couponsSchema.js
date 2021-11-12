const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creation: {
      type: Date,
      required: true,
    },
    expiration: {
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
