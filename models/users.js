const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  profit: {
    type: String
  },
  agencyName: {
    type: String,
    default: "no company name"
  },
  username: {
    type: String,
    default: "no name"
  },
  password: {
    type: String,
    default: "abc123"
  },
  firstName: {
    type: String,
    default: "Joe"
  },
  lastName: {
    type: String,
    default: "Smith"
  },
  email: {
    type: String,
    default: "joe@gmail.com"

  },
  phone: {
    type: Number,
    default: "30350195102951"
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
  duration: {
    type: String,
    default: "150 days"
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
    type: String,
    default: "3570 S Las Vegas Blvd"
  },
  address2: {
    type: String
  },
  state: {
    type: String,
    default: "Nevada"
  },
  city: {
    type: String,
    default: "Las Vegas"
  },
  zip: {
    type: Number,
    default: "88901"
  }
});

const users = mongoose.model("user", userSchema);

module.exports = users;
