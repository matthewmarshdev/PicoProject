// const db = require("../models/dog");

// // Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.Book.find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Book.findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Book.create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book.findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };

const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addDog: function(req, res) {
    db.dog
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getDogs: function(req, res) {
    db.dog
      .find({})
      .sort({ date: -1 })
      .then(dbDogs => res.json(dbDogs))
      .catch(err => res.status(422).json(err));
  },
  findDogById: function(req, res) {
    db.dog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateDogById: function(req, res) {
    db.dog
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
