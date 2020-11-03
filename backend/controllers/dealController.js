const Deal = require('../models/dealSchema');

module.exports = {
  // get all deals from the database
  getAllDeals: async (req, res) => {
    try {
      const allDeals = await Deal.find();
      res.json(allDeals);
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: error.message,
      });
    }
  },

  //post a new deal
  addDeal: async (req, res) => {
    try {
      const {
        date,
        salesman,
        consultantName,
        broker,
        endCustomer,
        price,
        allocation,
        paymentTerms,
        otherTerms,
        startingDate,
        duration,
        contactPerson,
        subContractorName,
        price2,
        otherInfo,
      } = req.body;

      // save data to the mongodb

      const newDeal = await new Deal({
        date,
        salesman,
        consultantName,
        broker,
        endCustomer,
        price,
        allocation,
        paymentTerms,
        otherTerms,
        startingDate,
        duration,
        contactPerson,
        subContractorName,
        price2,
        otherInfo,
      });

      const savedDeal = await newDeal.save();
      res.status(200).json({
        success: true,
        data: savedDeal,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: error.message,
      });
    }
  },
};
