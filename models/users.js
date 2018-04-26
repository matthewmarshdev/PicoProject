const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  type: { type: String, required: false },
  name: { type: String, required: true },
  company: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
