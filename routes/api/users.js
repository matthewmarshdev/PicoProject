const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  //.get(userController.getUser)
  .post(userController.createUser)


// Matches with "/api/users/:id"
router
  .route("/:id")
  //.get(userController.findUserById)
  //.put(userController.updateUserById);

module.exports = router;