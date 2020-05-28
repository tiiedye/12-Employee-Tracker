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
  database: "employee_DB"
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
            message: "Welcome to the Employee Tracker. What would you like to do?",
            choices: [
                "View all Employees",
                "View all Employees by Department",
                "View all Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Add Department",
                "Add Role",
                "Exit"
            ]
        }).then(function(answer) {
            if (answer.main === "View all Employees") {
                viewEmployees();
            } else if (answer.main === "View all Employees by Department") {
                employeesByDepartment();
            } else if (answer.main === "View all Employees by Manager") {
                employeesByManager();
            } else if (answer.main === "Add Employee") {
                addEmployee();
            } else if (answer.main === "Remove Employee") {
                removeEmployee();
            } else if (answer.main === "Update Employee Role") {
                updateEmployee();
            } else if (answer.main === "Add Department") {
                addDepartment();
            } else if (answer.main === "Add Role") {
                addRole();
            } else {
                connection.end();
            }
        });
}

function viewEmployees() {
    var query = "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id";
    connection.query(query, function(err, results) {
        for (var i = 0; i < results.length; i++) {
            console.log(i + 1 + ".) Name: " + results[i].first_name + " " + results[i].last_name + " || Role: " + results[i].title + " || Salary: " + results[i].salary + " || Department: " + results[i].name);
        }
        runApp();
    });
};

function employeesByDepartment() {
    inquirer
        .prompt({
            type: "list",
            name: "department",
            message: "What Department would you like to search?",
            choices: [
                "Engineering",
                "Sales",
                "Legal",
                "Return"
            ]
        }).then(function(answer) {
            if (answer.department === "Engineering") {
                var query = "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id";
                connection.query(query, function(err, results) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].name === "Engineering") {
                            console.log(i + 1 + ".) Name: " + results[i].first_name + " " + results[i].last_name + " || Role: " + results[i].title + " || Salary: " + results[i].salary + " || Department: " + results[i].name);
                        }
                    }
                    runApp();
                })
            } else if (answer.department === "Sales") {
                var query = "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id";
                connection.query(query, function(err, results) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].name === "Sales") {
                            console.log(i + 1 + ".) Name: " + results[i].first_name + " " + results[i].last_name + " || Role: " + results[i].title + " || Salary: " + results[i].salary + " || Department: " + results[i].name);
                        }
                    }
                    runApp();
                })
            } else if (answer.department === "Legal") {
                var query = "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id";
                connection.query(query, function(err, results) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].name === "Legal") {
                            console.log(i + 1 + ".) Name: " + results[i].first_name + " " + results[i].last_name + " || Role: " + results[i].title + " || Salary: " + results[i].salary + " || Department: " + results[i].name);
                        }
                    }
                    runApp();
                })
            } else {
                runApp();
            }
        })}