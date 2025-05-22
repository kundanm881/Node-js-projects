const express = require("express");
const router = express.Router();
const authController = require('../controller/auth_controller');




// create new account
router.post("/create", authController.createNewUser);

// Login user
router.post("/login", authController.loginUser);




module.exports = router;