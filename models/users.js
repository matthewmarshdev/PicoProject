const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  agencyName: {
    type: Boolean
  },
  agencyName: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  type: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  ofAge: {
    type: Boolean
  },
  haveOwned: {
    type: Boolean
  },
  wheresleep: {
    type: Boolean
  },
  unanYes: {
    type: Boolean
  },
  fullAvail: {
    type: Boolean
  },
  aggroPets: {
    type: Boolean
  },
  hasTallFence: {
    type: Boolean
  },
  aggreeterms: {
    type: Boolean
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: Number
  }
});

const users = mongoose.model("user", userSchema);

module.exports = users;
