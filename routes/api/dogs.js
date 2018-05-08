const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

// Matches with "/api/dogs"
router.route("/")
  .get(dogsController.getDogs)
  .post(dogsController.addDog)


// Matches with "/api/dogs/:id"
router
  .route("/:id")
  .get(dogsController.findDogById)
  .put(dogsController.updateDogById);

module.exports = router;