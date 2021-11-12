module.exports.apiIndex = (req, res) => {
  return res.status(200).json({
    message: 'Api working',
    routes: {
      createcoupon: '/api/coupons/create',
      validatecpupon: '/api/coupons/validate',
      listcoupons: '/api/coupons/listall',
    },
  });
};
