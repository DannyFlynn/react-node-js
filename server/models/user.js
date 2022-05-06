//creating connection to database
const mysql = require('mysql');

var DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "users_database"
  });

  module.exports = DB;