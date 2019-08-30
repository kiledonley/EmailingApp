let mysql = require('mysql');
let pool= require('../connections.js');
 

let SQL = `CALL addMessage(?)`;

function addMessage(res, senderID, threadID, body){

    console.log( senderID, threadID, body);
     pool.query(
      `SELECT * FROM User WHERE Usercol= ?`, username, (err, results) => { 
  
        if(err){ return res.send(err); }
  
        if(results.length !== 0){
          return res.send({err: 'username is taken'});    
        }
        pool.query(
          `INSERT INTO User(Usercol, Password, Email)
          VALUES(?,?,?)`, [username, hash, email], (err, results) => { 
            if(err){ return res.send(err); } 
            } 
        )
        return res.send({ token: `User registered`});
  })
  }

module.exports.addMessage = addMessage;