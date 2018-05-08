const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

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
    default: "jsmith@gmail.com"
  },
  phone: {
    type: Number,
    default: 1234567890
  },

  date: {
    type: Date,
    default: Date.now
  },
  address1: {
    type: String,
      default: "no address provided"
  },
  address2: {
    type: String,
      default: "N/A"
  },
  stateprovidence: {
    type: String,
      default: "no state provided"
  },
  city: {
    type: String,
      default: "no city provided"
  },
  zipcode: {
    type: Number,
  }
});

const users = mongoose.model("user", userSchema);

module.exports = users;
