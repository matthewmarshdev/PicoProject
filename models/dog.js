const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dogSchema = new Schema({

  name: {
    type: String
  },
  image: {
    type: String
  },
  size: {
    type: String
  },
  breed: {
    type: String
  },
  weight: {
    type: String
  },
  temperment: {
    type: String
  },
  sex: {
    type: String
  },
  pickupDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String
  },
  isChopped: {
    type: Boolean
  },
  isChipped: {
    type: Boolean
  },
  hasVacc: {
    type: Boolean
  },
  story: {
    type: String
  }
});
const dog = mongoose.model("dog", dogSchema);

module.exports = dog; 