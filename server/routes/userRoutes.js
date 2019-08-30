var express = require('express');
var router = express.Router();
var userFunctions = require("../models/User.js")

router.post("/login", (req,res) => {
  userFunctions.login(res, req.body.username, req.body.password)
  })

router.post("/register", (req,res) => {
  userFunctions.register(res, req.body.username, req.body.password, req.body.email)
  })

  module.exports = router;
