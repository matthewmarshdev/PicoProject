const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
      .post(userController.createUser)
      //.update(userController.updateUserById);

router.route("/:email")
      .get(userController.findUserByEmail)


module.exports = router;
