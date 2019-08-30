let mysql = require('mysql');
let pool= require('../connections.js');
 
function addMessage(res, senderID, threadID, body){

    console.log( senderID, threadID, body);

        pool.query(
          `INSERT INTO Message(senderID, threadID, body)
          VALUES(?,?,?)`, [senderID, threadID, body], (err, results) => { 
            if(err){ return res.send(err); } 
            } 
        )
        return res.send({ token: `message added`});
  }


module.exports.addMessage = addMessage;