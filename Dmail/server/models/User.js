let pool= require('../connections.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function login(res, username, password){

   pool.query(
    `SELECT * FROM User WHERE Usercol= ?`, username, (err, results) => { 

      if(err){ return res.send(err); }
      console.log(results[0], password)
      if(results.length !== 0 && 
        bcrypt.compareSync(password, results[0].Password)) {
          if(err){ return res.send(err); }
          return res.send({UserID: results[0].UserID})
      }
      // if(results.length === 0 || hash !== results[0].password){
      //   return res.send({err: 'incorrect username or password'},);    
      // }
    return res.send({err: 'username or password incorrect'});
})
}

function register(res, username, password, email){

  console.log( username, password, email);
  let hash = bcrypt.hashSync(password, saltRounds);
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

module.exports.login = login;
module.exports.register = register;

