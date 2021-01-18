const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('vehicle', VehicleSchema);