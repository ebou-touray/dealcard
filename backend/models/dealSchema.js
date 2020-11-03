const mongoose = require('mongoose');

const DealSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },
    salesman: {
      type: String,
      required: true,
    },
    consultantName: {
      type: String,
      required: true,
    },
    broker: {
      type: String,
      required: true,
    },
    endCustomer: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    allocation: {
      type: Number,
      required: true,
    },
    paymentTerms: {
      type: String,
      required: true,
    },
    otherTerms: {
      type: String,
    },
    startingDate: {
      type: Date,
      default: Date.now(),
    },
    duration: {
      type: String,
    },

    subContractorName: {
      type: String,
    },
    price2: {
      type: Number,
    },
    otherInfo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('DealSchema', DealSchema);
