const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'vehicle',
    required: true
  },
  time_start: {
    type: Date,
    required: true
  },
  time_end: {
    type: Date,
    required: true
  },
  driver: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  }
});

module.exports = mongoose.model('trip', TripSchema);