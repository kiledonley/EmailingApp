let mysql = require('mysql');
let pool= require('../connections.js');
 

let SQL = `CALL addMessage(?)`;

pool.query(
    'SELECT * FROM message WHERE id=? LIMIT ?, 5',[ user_id, start ], 
    function (err, results) {

    }
);