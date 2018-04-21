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

    }
]

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