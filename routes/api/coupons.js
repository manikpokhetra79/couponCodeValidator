const express = require('express');
const router = express.Router();
const couponsController = require('../../controllers/apiControllers/counponsController');
router.post('/create', couponsController.createCoupon);
router.get('/validate', couponsController.validateCoupon);
router.get('/listall', couponsController.listCoupons);
module.exports = router;
