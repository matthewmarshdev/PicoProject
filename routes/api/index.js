const router = require("express").Router();
const userController = require("../../controllers/userController");
const dogsController = require("../../controllers/dogsController");

router.use( '/user', userController.createUser )

module.exports = router;

