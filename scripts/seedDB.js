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
    image: "https://i.imgur.com/tEpBa72.jpg",
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
    image: "https://i.imgur.com/4uPFsPt.jpg",
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
    image: "https://i.imgur.com/nU6sQlq.jpg",
    breed: "American Bully",
    weight: "65",
    status: "complete",
    temperment: "Aggressive",
    pickedDate: Date.new,
    sex: "Male",
    story: "Lorem",
    pickupDate: new Date(Date.now())
  },

  {
    name: "Barkley",
    size: "small",
    image: "https://i.imgur.com/E0vthKH.jpg",
    breed: "weird mutt",
    weight: "9",
    status: "adopted",
    temperment: "Happy!",
    pickedDate: Date.new,
    sex: "Male",
    story: "couldnt be a sweeter dog, came from a sad home",
    pickupDate: new Date(Date.now())
  },

  {
    name: "Geraldine",
    size: "Small",
    image: "https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg",
    breed: "Pug",
    weight: "7",
    status: "complete",
    temperment: "Sits a lot",
    pickedDate: Date.new,
    sex: "Female",
    story: "Such a happy little critter",
    pickupDate: new Date(Date.now())
  },

  {
    name: "Clover",
    size: "Medium",
    image: "https://imgur.com/oCrUMvk.jpg",
    breed: "Husky",
    weight: "20",
    status: "adopted",
    pickedDate: Date.new,
    temperment: "Energetic",
    sex: "Female",
    story: "I eat a whole lot!",
    pickupDate: new Date(Date.now())
  },
    {
    name: "Moonie",
    size: "Small",
      image: "https://farm1.staticflickr.com/479/20146544809_bc2ef18a97.jpg",
    breed: "Chinese Crested",
    weight: "9",
    status: "complete",
    pickedDate: Date.new,
    temperment: "content",
    sex: "Female",
    story: "I will need a sweater!",
    pickupDate: new Date(Date.now())
  },
    {
    name: "Mario and Luigi",
    size: "Large",
      image: "https://i.imgur.com/9J59tj5.jpg",
    breed: "Doberman",
    weight: "100",
    status: "adopted",
    pickedDate: Date.new,
    temperment: "very excited",
    sex: "Males",
    story: "We need to go as a package deal",
    pickupDate: new Date(Date.now())
  },
    {
    name: "Droopz",
    size: "small",
    image: "https://imgur.com/UgyMSwH.jpg",
    breed: "Lhasa Apso",
    weight: "14",
    status: "complete",
    pickedDate: Date.new,
    temperment: "Sleepy",
    sex: "Female",
    story: "I love to be brushed!",
    pickupDate: new Date(Date.now())
  },
    {
    name: "Clover",
    size: "Medium",
    image: "https://imgur.com/hPLma0n.jpg",
    breed: "Cattledog",
    weight: "25",
    status: "transferred",
    pickedDate: Date.new,
    temperment: "cow doggie",
    sex: "Female",
    story: "I need to be on the open range",
    pickupDate: new Date(Date.now())
  },
    {
    name: "Happy",
    size: "small",
    image: "https://imgur.com/MdsD3Zk.jpg",
    breed: "Chihuahua",
    weight: "15",
    status: "fostered",
    pickedDate: Date.new,
    temperment: "Energetic",
    sex: "Male",
    story: "I need a very happy special home",
    pickupDate: new Date(Date.now())
  },
    {
    name: "Pico",
    size: "pico-sized",
    image: "https://i.imgur.com/M0Y5fpW.jpg",
    breed: "Chihuahua",
    weight: "9",
    status: "adopted",
    pickedDate: Date.new,
    temperment: "Energetic",
    sex: "Male",
    story: "Thank you for making my forever home!",
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