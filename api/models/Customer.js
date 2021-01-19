const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  address: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('customer', CustomerSchema);