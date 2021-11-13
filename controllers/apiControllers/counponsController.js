let Coupon = require('../../models/couponsSchema');

module.exports.createCoupon = async (req, res) => {
  try {
    let formData = req.body.formdata;
    console.log(formData);
    let name = formData.name.toUpperCase();
    // console.log('inhere try');
    let newCoupon = await Coupon.findOne({ name });
    let today = new Date();

    // let date = today.getDate();
    if (newCoupon) {
      // coupon already exists
      // console.log('inhere');
      return res.status(400).json({
        message: 'coupon already exists',
        coupon: newCoupon,
      });
    } else {
      let expiry = new Date(formData.expiryDate);

      // if coupon date is entered wrong
      if (expiry.getTime() <= today.getTime()) {
        return res.status(422).json({
          message: 'Enter Correct expiry date',
        });
      }
      // create a new coupon
      if (formData.couponType === 'flat') {
        newCoupon = await Coupon.create({
          name: name,
          creationDate: today,
          expirationDate: expiry,
          minCartAmount: formData.minCartAmount,
          couponType: formData.couponType,
          flatAmount: formData.flatAmount,
        });
      } else {
        newCoupon = await Coupon.create({
          name: name,
          creationDate: today,
          expirationDate: formData.expiryDate,
          minCartAmount: formData.minCartAmount,
          couponType: formData.couponType,
          percentValue: formData.percentValue,
          percentMaxDiscount: formData.maxDiscount,
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
module.exports.validateCoupon = async (req, res) => {
  try {
    let code = req.body.couponcode.toUpperCase();
    let newCoupon = await Coupon.findOne({ name: code });
    console.log(newCoupon);
    let today = new Date();
    let currentCartValue = req.body.cartValue;
    if (!newCoupon) {
      return res.status(422).json({
        message: 'Invalid Coupon code',
      });
    } else {
      // if coupon exists
      // conditions when coupon won't work
      // when coupon is past expiration date
      let expirationDate = new Date(newCoupon.expirationDate);
      if (today.getTime() > expirationDate.getTime()) {
        return res.status(422).json({
          message: 'coupon code past expiration date',
          status: 'coupon expired',
        });
      } else if (currentCartValue < newCoupon.minCartAmount) {
        // if current cartvalue is less than the required cart value
        return res.status(422).json({
          message: `Coupon will work for cart Value of over ${newCoupon.minCartAmount}`,
          status: 'coupon code not applicable',
        });
      } else {
        let couponType = newCoupon.couponType;
        if (couponType === 'flat') {
          let discountAmount = newCoupon.flatAmount;
          let updatedCartValue =
            (await currentCartValue) - newCoupon.flatAmount;
          return res.status(200).json({
            message: 'coupon code applied successfully',
            discountAmount,
            updatedCartValue,
          });
        } else {
          let discountPercent = newCoupon.percentValue;
          let discountAmount =
            (await currentCartValue) * (discountPercent / 100);
          if (discountAmount > newCoupon.percentMaxDiscount) {
            discountAmount = newCoupon.percentMaxDiscount;
          }
          let updatedCartValue = (await currentCartValue) - discountAmount;
          return res.status(200).json({
            message: 'coupon code applied successfully',
            discountAmount,
            updatedCartValue,
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error while validating coupon',
      error,
    });
  }
};
module.exports.listCoupons = async (req, res) => {
  try {
    let coupons = await Coupon.find();
    console.log(coupons);
    return res.status(200).json({
      message: 'coupons fetched successfully',
      coupons,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error while validating coupon',
      error,
    });
  }
};
