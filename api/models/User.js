const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('user', UserSchema);