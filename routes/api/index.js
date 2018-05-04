const router = require("express").Router();
const dogRoutes = require("./dogs");
const userRoutes = require("./users");

//const userController = require("../../controllers/userController");
// const dogsController = require("../../controllers/dogsController");


router.use("/dogs", dogRoutes);
// router.use('/adddog', dogsController.addDog);
// router.use('/getdogs', dogsController.getDogs);

router.use('/users', userRoutes);

module.exports = router;
