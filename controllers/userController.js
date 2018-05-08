const Users = require("../models/users");

module.exports = {

  createUser: function (req, res) {
    Users
      .create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        agencyName: req.body.agency,
        phone: req.body.phone,
        profit: req.body.profit,
        duration: req.body.duration,
        address1: req.body.address1,
        address2: req.body.address2,
        state: req.body.state,
        city: req.body.city,
        zip: req.body.zip
      })
      .then(function (userData) {
        res.send("success! It worked");
      })
      .catch(function (error) {
        res.send(console.log(error));
      });
  },

  login: function (req, res) {
    console.log(req.body);
    Users
      .findOne(req.body, function (user) {
        console.log(user);
      })
      .then(function (userData) {
        res.json(userData);
      })
      .catch(err => res.json(err));
  },

  findUserByEmail: function (req, res) {
    const email = req.params.email;
    Users
      .findOne({ email })
      .then(userData => {
        const { email, phone, firstName, lastName, agency } = userData;
        res.json({ email, phone, firstName, lastName, agency });
      })
      .catch(err => res.json(err));
  },

  updateUserByEmail: function (req, res) {
    // Expects updateFields to be exact model names, inside of an object
    const { email, updateFields } = req.body;
    Users
      .update({ email }, { ...updateFields })
      .then((err, affected, resp) => {
        console.log("What is our response?", resp);
        // check if field was update otherwise throw error
        if (affected === 0)
          throw new Error("User was not updated properly", email);
        else res.json(resp);
      })
      .catch(err => res.json(err));
  }
}