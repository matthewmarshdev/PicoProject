const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactdoglist"
);

const dogSeed = [
  {
    name: "Pico",
    size: "Small",
    breed: "Dachshund",
    weight: "20",
    temperment: "Friendly",
    sex: "Male",
    status: "adopted",
    story: "Lorem",
    pickupDate: new Date(Date.now())
  },
  {
    name: "Barry",
    size: "Small",
    breed: "Cairn Terrier",
    weight: "22",
    status: "incomplete",
    temperment: "Friendly",
    sex: "Male",
    story: "Lorem",
    pickupDate: new Date(Date.now())
  },
  {
    name: "Moose",
    size: "Medium",
    breed: "American Bully",
    weight: "65",
    status: "complete",
    temperment: "Aggressive",
    sex: "Male",
    story: "Lorem",
    pickupDate: new Date(Date.now())
  },

  {
    name: "Lucielle",
    size: "Large",
    breed: "Alaskian Eskimo",
    weight: "140",
    status:"fostered",
    temperment: "Neutral",
    sex: "Female",
    story: "Lorem",
    pickupDate: new Date(Date.now())
  },


  {
    name: "Geraldine",
    size: "Large",
    breed: "Alaskian Eskimo",
    weight: "140",
    status:"transferred",
    temperment: "Neutral",
    sex: "Female",
    story: "Lorem",
    pickupDate: new Date(Date.now())
  }
];


db.dog.remove({})
  .then(() => db.dog.collection.insertMany(dogSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });