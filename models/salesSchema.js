const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema(
  {
    date: {
      type: date.now(),
    },
    salesman: {
      type: String,
      required: true,
    },
    consultantName: {
      type: String,
    },
    broker: {
      type: String,
    },
    endCustomer: {
      type: String,
    },
    price: {
      type: Number,
    },
    allocation: {
      type: Number,
    },
    paymentTerms: {
      type: String,
    },
    otherTerms: {
      type: String,
    },
    startingDate: {
      type: String,
    },

    duration: {
      type: Number,
    },
    contactPerson: {
      type: String,
    },

    subcontractorName: {
      type: String,
    },
    price: {
      type: Number,
    },
    otherInfo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SalesSchema', SalesSchema);
