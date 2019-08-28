let mysql = require('mysql');
let pool= require('../connections.js');
 

let SQL = `CALL login(?)`;

pool.query(SQL, true, (error, results,) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
  });
   


