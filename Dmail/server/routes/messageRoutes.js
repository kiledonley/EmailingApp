var express = require('express');
var router = express.Router();
var messageFunctions = require("../models/message.js")

router.post("/addMessage", (req,res) => {
  console.log(req.body.body)
  messageFunctions.addMessage(res, req.body.SenderID, req.body.threadID, req.body.body)
  })

  module.exports = router;