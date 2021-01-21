const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  ticket: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'ticket',
    required: true
  }],
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'customer',
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  time: {
    type: Date,
    default: Date.now()
  },
  price: {
    type: Number,
    min: 0,
    required: true
  }
});

module.exports = mongoose.model('bill', BillSchema);
