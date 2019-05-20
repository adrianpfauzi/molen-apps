var mysql = require('mysql');
var dbconnect = mysql.createPool({
    host:"192.168.0.109",
    user:"root",
    password:"123456",
    database:"molendb"
});

module.exports = dbconnect