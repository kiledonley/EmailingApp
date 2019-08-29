let pool= require('../connections.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function login(res, username, password){

  console.log("running the function")
  let hash = bcrypt.hashSync(password, saltRounds);
   pool.query(
    `SELECT * FROM User WHERE Usercol= ?`, username, (err, results) => { 

      if(err){ return res.send(err); }

      if(results.length === 0 || hash !== results[0].password){
        return res.send({err: 'incorrect username or password'});    
      }
    return res.send({userID: results.userID});
})
}

module.exports.login = login;

