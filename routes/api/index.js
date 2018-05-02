const router = require("express").Router();
const dogRoutes = require("./dogs");

const userController = require("../../controllers/userController");
// const dogsController = require("../../controllers/dogsController");


router.use("/dog", dogRoutes);
// router.use('/adddog', dogsController.addDog);
// router.use('/getdogs', dogsController.getDogs);

router.use( '/user', userController.createUser );
router.post("/signup", userController.createUser);


module.exports = router;
