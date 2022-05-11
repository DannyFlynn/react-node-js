//creating connection to database
require('dotenv').config();

const mysql = require('mysql');

var DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "users_database"
  });

  module.exports = DB;