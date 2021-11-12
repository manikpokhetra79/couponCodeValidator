const express = require('express');
const router = express.Router();
const apiController = require('../../controllers/apiControllers/apiController');
router.get('/', apiController.apiIndex);
router.use('/coupons', require('./coupons'));
module.exports = router;
