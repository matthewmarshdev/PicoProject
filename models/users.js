const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  company: {
    type: String,
    required: Boolean,
    trim: true
  },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    // required: [true, "can't be blank"],
    trim: true,
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    // required: true,
    trim: true
  },
  password: {
    type: String,
    // required: true,
    trim: true
  },
  date: {
    type: Number,
    date: { dateAdded: Date },
    // required: true,
    trim: true
  },
  // ifFoster: {
    ofage: {
      type: Boolean,
      // required: true
    },
    haveowned: {
      type: Boolean,
      // required: true
    },
    wheresleep: {
      type: Boolean,
      // required: true
    },
    unanimousyes: {
      type: Boolean,
      // required: true
    },
    fullavailable: {
      type: Boolean,
      // required: true
    },
    aggropets: {
      type: Boolean,
      // required: true
    },
    hastallfence: {
      type: Boolean,
      // required: true
    },
    aggreeterms: {
      type: Boolean,
      // required: true
    },
    address1: {
      type: String,
      // required: true,
      trim: true
    },
    address2: {
      type: String,
      // required: false,
      trim: true
    },
    stateprovidence: {
      type: String,
      // required: true,
      trim: true
    },
    city: {
      type: String,
      // required: true,
      trim: true
    },
    zipcode: {
      type: Number,
      // required: true,
      trim: true
    }
  });

const users = mongoose.model("users", userSchema);

module.exports = users;
