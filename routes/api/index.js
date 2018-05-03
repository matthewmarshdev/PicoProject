const router = require("express").Router();
const dogRoutes = require("./dogs");
const userRoutes = require("./users");

//const dogsController = require("../../controllers/dogsController");
//const userController = require("../../controllers/userController");


router.use("/dogs", dogRoutes);
// router.use('/adddog', dogsController.addDog);
// router.use('/getdogs', dogsController.getDogs);

router.use("/users", userRoutes);
//router.post("/signup", userController.createUser);


module.exports = router;
