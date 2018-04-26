const router = require("express").Router();
const companyController = require("../../controllers/companyController")
router.use( '/user', companyController.createUser )
module.exports = router;

