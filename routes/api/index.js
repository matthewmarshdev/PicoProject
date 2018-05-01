const router = require("express").Router();
const userController = require("../../controllers/userController");
const dogsController = require("../../controllers/dogsController");

router.use('/adddog', dogsController.addDog);
router.use( '/user', userController.createUser );
router.use('/getdogs', dogsController.getDogs);

module.exports = router;
