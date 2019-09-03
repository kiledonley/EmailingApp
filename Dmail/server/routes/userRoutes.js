var express = require('express');
var router = express.Router();
var userFunctions = require("../models/User.js")
var passportFunctions = require("../config/passport.conf")
const passport = require("passport")


router.post("/login", passport.authenticate("local"), (req,res) => {
  res.send(req.user)
  })

// PREPASSPORT ROUTE
// router.post("/login", (req,res) => {
//   userFunctions.login(res, req.body.username, req.body.password)
//   })

router.post("/register", (req,res) => {
  userFunctions.register(res, req.body.username, req.body.password, req.body.email)
  })

  module.exports = router;
