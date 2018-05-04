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
  ofage: {
    type: Boolean
  },
  haveowned: {
    type: Boolean
  },
  wheresleep: {
    type: Boolean
  },
  unanimousyes: {
    type: Boolean
  },
  fullavailable: {
    type: Boolean
  },
  aggropets: {
    type: Boolean
  },
  hastallfence: {
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
  stateprovidence: {
    type: String
  },
  city: {
    type: String
  },
  zipcode: {
    type: Number
  }
});

const users = mongoose.model("user", userSchema);

module.exports = users;
