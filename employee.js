var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Shiro4Vanguard",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runApp();
});

function runApp() {
    inquirer
        .prompt({
            type: "list",
            name: "main",
            message: "Welcome to the Employee Tracker. What would you like to do?"
        })
}