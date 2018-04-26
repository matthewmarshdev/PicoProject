const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dogSchema = new Schema({
  name: {
    type: String
  },
  size: {
    type: String
  },
  breed: {
    type: String,
  },
  weight: {
    type: Number,
    minimum: 5
  },
  temperment: {
    type: String,
    required: false
  },
  sex: {
    type: String,
    required: true
  },
  pickupDate: {
    type: Date,
    default: Date.now
  },
  isChopped: {
    type: Boolean,
    required: true
  },
  isChipped: {
    type: Boolean,
    required: false
  },
  hasVacc: {
    type: Boolean,
    required: true
  }
});
const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
