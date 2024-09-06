const express = require("express");
const registerUser = require("./UserController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/object").get(registerUser);

module.exports = router;