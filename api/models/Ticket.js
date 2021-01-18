const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  position: {
    type: String,
    trim: true,
    uppercase: true,
    maxlength: 3,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  trip: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'trip',
    required: true
  }
});

module.exports = mongoose.model('ticket', TicketSchema);