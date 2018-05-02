const router = require("express").Router();
const dogRoutes = require("./dogs");

const userController = require("../../controllers/userController");
// const dogsController = require("../../controllers/dogsController");


router.use("/books", dogRoutes);
// router.use('/adddog', dogsController.addDog);
router.use( '/user', userController.createUser );
// router.use('/getdogs', dogsController.getDogs);

module.exports = router;
