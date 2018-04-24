const mongoose = require("mongoose");
const SchemaTwo = mongoose.SchemaTwo;

let userSchema = new Schema({
  Type: { type: String, required: true },
  Name: { type: String, required: true },
  Company: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: Number, required: true },
  Password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
