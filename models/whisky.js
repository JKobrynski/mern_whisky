const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WhiskySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  age: {
    type: Number,
    default: null
  },
  country: {
      type: String,
      required: true
  },
  description: {
      type: String,
      default: null
  }
});

module.exports = Whisky = mongoose.model('whisky', WhiskySchema);