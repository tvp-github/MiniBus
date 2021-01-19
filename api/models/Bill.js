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
  }
});

module.exports = mongoose.model('bill', BillSchema);