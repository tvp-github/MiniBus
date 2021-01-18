const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  ticket: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'ticket',
    required: true
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
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