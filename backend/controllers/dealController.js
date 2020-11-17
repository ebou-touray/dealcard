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

  //DELETE deals
  deleteDeals: async (req, res) => {
    try {
      await Deal.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Deleted Deal Successfully' });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  //Find note by id
  findDealsById: async (req, res) => {
    try {
      const findDeal = await Deal.findById(req.params.id);
      res.json(findDeal);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  //EDIT deals
  editDeals: async (req, res) => {
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
      const updatedDeals = {};
      if (date) updatedDeals.date = date;
      if (salesman) updatedDeals.salesman = salesman;
      if (consultantName) updatedDeals.consultantName = consultantName;
      if (broker) updatedDeals.broker = broker;
      if (endCustomer) updatedDeals.endCustomer = endCustomer;
      if (price) updatedDeals.price = price;
      if (allocation) updatedDeals.allocation = allocation;
      if (paymentTerms) updatedDeals.paymentTerms = paymentTerms;
      if (otherTerms) updatedDeals.otherTerms = otherTerms;
      if (startingDate) updatedDeals.startingDate = startingDate;
      if (duration) updatedDeals.duration = duration;
      if (contactPerson) updatedDeals.contactPerson = contactPerson;
      if (subContractorName) updatedDeals.subContractorName = subContractorName;
      if (price2) updatedDeals.price2 = price2;
      if (otherInfo) updatedDeals.otherInfo = otherInfo;

      const editDeal = await Deal.findByIdAndUpdate(
        req.params.id,
        {
          $set: updatedDeals,
        },
        { new: true }
      );

      res.json(editDeal);
    } catch (error) {
      res.status(422).json(error.message);
    }
  },
};
