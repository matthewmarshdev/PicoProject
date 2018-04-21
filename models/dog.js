const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dogSchema = new Schema({
  Name: { type: String, required: true },
  Size: { type: Number, required: true },
  Breed: { type: String, required: true },
  Weight: { type: Number, required: false },
  Temperment: { type: String, required: true },
  Sex: { type: Number, required: true },
  Story: { type: String, required: true },
  pickupDate: { type: Date, default: Date.now }
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
