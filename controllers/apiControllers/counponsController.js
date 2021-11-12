let Coupon = require('../../models/couponsSchema');

module.exports.createCoupon = async (req, res) => {
  try {
    let name = req.body.name.toUpperCase();
    console.log('inhere try');
    let newCoupon = await Coupon.findOne({ name });
    let today = new Date();
    let date = today.getDate();
    if (newCoupon) {
      // coupon already exists
      console.log('inhere');
      return res.status(400).json({
        message: 'coupon already exists',
        coupon: newCoupon,
      });
    } else {
      // create a new coupon
      if (req.body.couponType === 'flat') {
        newCoupon = await Coupon.create({
          name: name,
          creationDate: today,
          expirationDate: req.body.expiryDate,
          minCartAmount: req.body.minCartAmount,
          couponType: req.body.couponType,
          flatAmount: req.body.flatAmount,
        });
      } else {
        newCoupon = await Coupon.create({
          name: name,
          creationDate: today,
          expirationDate: req.body.expiryDate,
          minCartAmount: req.body.minCartAmount,
          couponType: req.body.couponType,
          percentValue: req.body.percentValue,
          percentMaxDiscount: req.body.maxDiscount,
        });
      }
      return res.status(200).json({
        message: 'Coupon successfully created',
        coupon: newCoupon,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error while creating coupon',
      error,
    });
  }
};
// module.exports.validateCoupon = (req, res) => {};
// module.exports.listCoupons = (req, res) => {};
