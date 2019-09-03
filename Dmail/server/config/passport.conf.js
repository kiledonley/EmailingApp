const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("./database.conf");
const bcrypt = require("bcrypt");

const saltRounds = 10;

passport.serealizeUser((user,done) => done(null, user));

passport.use(new LocalStrategy( ( username, password, done) =>{
    pool.query(
        `SELECT * FROM User WHERE Usercol= ?`, username, (err, user) => { 
    
          if(err){ return done(err); }

          if(!user[0] && 
            bcrypt.compareSync(password, user[0].Password)) {
              return done(null, false, { message: 'username or password is incorrect.'})
          }
          
        return done(null, {username: user[0].Usercol, userID: results[0].UserID});
    })
}
));

module.exports = passport;