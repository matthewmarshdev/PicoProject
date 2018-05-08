const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addDog: function (req, res) {
    db.dog
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  getDogs: function (req, res) {
    db.dog
      .find({})
      .sort({ date: -1 })
      .then(dbDogs => res.json(dbDogs))
      .catch(err => res.status(503).json(err));
  },
  findDogById: function (req, res) {
    // console.log(findDogById)
    console.log("find Dog by Id working",req.params)
    db.dog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  updateDogById: function (req, res) {
    db.dog
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  }
};
