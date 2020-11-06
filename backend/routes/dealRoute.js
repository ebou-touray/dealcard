const express = require('express');
const router = express.Router();

const dealController = require('../controllers/dealController');

router.route('/postDeal').post(dealController.addDeal);
router.route('/getAllDeals').get(dealController.getAllDeals);
router.route('/deals/:id').delete(dealController.deleteDeals);
router.route('/:id').get(dealController.findDealsById);

module.exports = router;
