const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactdoglist",
  {
    useMongoClient: true
  }
);

const dogSeed = [
  {
    Name: "Pico",
    Size: "Small",
    Breed: "Dachshund",
    Weight: 20,
    Temperment: "Friendly",
    Sex: "Male",
    Story: "Lorem",
    pickupDate: new Date(Date.now())
  },
  {
    Name: "Barry",
    Size: "Small",
    Breed: "Cairn Terrier",
    Weight: 22,
    Temperment: "Friendly",
    Sex: "Male",
    Story: "Lorem",
    pickupDate: new Date(Date.now())
  },
  {
    Name: "Moose",
    Size: "Medium",
    Breed: "American Bully",
    Weight: 65,
    Temperment: "Aggressive",
    Sex: "Male",
    Story: "Lorem",
    pickupDate: new Date(Date.now())
  },
  {
    Name: "Geraldine",
    Size: "Large",
    Breed: "Alaskian Eskimo",
    Weight: 140,
    Temperment: "Neutral",
    Sex: "Female",
    Story: "Lorem",
    pickupDate: new Date(Date.now())
  }
];

db.Dog.remove({})
  .then(() => db.Dog.collection.insertMany(dogSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });