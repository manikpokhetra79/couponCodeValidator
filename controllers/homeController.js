module.exports.index = (req, res) => {
  return res.status(200).json({
    message: 'Coupon Code Generator Backend server working fine!',
  });
};
