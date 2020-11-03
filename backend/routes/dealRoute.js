const express = require('express');
const router = express.Router();

const dealController = require('../controllers/dealController');

router.route('/postDeal').post(dealController.addDeal);
router.route('/getAllDeals').get(dealController.getAllDeals);

module.exports = router;
