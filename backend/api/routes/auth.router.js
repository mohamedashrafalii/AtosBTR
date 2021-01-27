const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const {Login}=authController

  router.post("/Login",Login)

  module.exports = router;
