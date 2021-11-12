const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
router.get('/', homeController.index);
// api routes
router.use('/api', require('./api'));
module.exports = router;
