const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: String,
  title: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Photo', photoSchema);