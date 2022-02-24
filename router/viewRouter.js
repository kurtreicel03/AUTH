const express = require("express");
const router = express.Router();
const viewController = require("../controller/viewController");

router.get("/", viewController.homePage);
router.get("/register", viewController.registerPager);
router.get("/login", viewController.login);

module.exports = router;
