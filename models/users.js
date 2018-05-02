const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String
  },
  agency: {
    type: String
    // required: "Company is Required if Agency",
    // trim: true
  },
  username: {
    type: String
    // // required: "Username is Required"
  },
  password: {
    type: String
    // // required: "Password is Required",
  },
  firstname: {
    type: String
    // required: "Name is Required",
  },
  lastname: {
    type: String
    // required: "Name is Required",
  },
  email: {
    type: String
    // required: "Email is Required",
  },
  phone: {
    type: Number
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  ofage: {
    type: Boolean
    // required: true
  },
  haveowned: {
    type: Boolean
    // required: true
  },
  wheresleep: {
    type: Boolean
    // required: true
  },
  unanimousyes: {
    type: Boolean
    // required: true
  },
  fullavailable: {
    type: Boolean
    // required: true
  },
  aggropets: {
    type: Boolean
    // required: true
  },
  hastallfence: {
    type: Boolean
    // required: true
  },
  aggreeterms: {
    type: Boolean
    // required: true
  },
  address1: {
    type: String
    // required: true,
  },
  address2: {
    type: String
    // required: false,
  },
  stateprovidence: {
    type: String
    // required: true,
  },
  city: {
    type: String
    // required: true,
  },
  zipcode: {
    type: Number
    // required: true,
    // trim: true
  }
});

const users = mongoose.model("user", userSchema);

module.exports = users;