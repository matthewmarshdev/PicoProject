const db = require ('../models/users');

module.exports = {

  // Create User **Working FE & BE **
  createUser: function(req, res) {
    // console.log("This is working")
    db.users
      .create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        agency: req.body.agency,
        phone: req.body.phone,
        ofAge: false,
      })
      .then(function(userData) {
        res.send("success!");
      })
      .catch(function(error) {
        res.send(error);
      });
  }

  //method needed to findOneAndUpdate for Foster/Adopter (only foster fields replace req.body)

  //method needed to findOneAndUpdate for Agency (only agency fields replace req.body)

  

  // FAD Dash
  //Find by ID to see Saved Dogs - use db.users to see saved dogs
  // findById: function (req, res) {
  //   db.users
  //   .findById(req.params.id)
  //   .then(userData => res.json(userData))
  //   .catch(err => res.status(422).json(err));
  // }

  //(Search Top Dog) Find all dogs by oldest date using db.dog and completed
  // findAll

  // //(Search dog) Find by id of "input value of breed, sex, weight, and completed" within db.dog
  // findbyId

  // //(Agency Info on Dog Card) Find by id to db.users "filter by agency that input dog". Adding agency info to dog card
  // findById


};