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
                updateEmployees();
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

function employeesByManager() {
    inquirer
        .prompt({
            type: "list",
            name: "managers",
            message: "Which manager would you like to see?",
            choices: [
                "Bryan Swarthout",
                "Ellie Denton",
                "Briar Robertson",
                "Return"
            ]
        }).then(function (answer) {
            if (answer.managers === "Bryan Swarthout") {
                var query = "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id";
                connection.query(query, function(err, results) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].manager_id === 1) {
                            console.log(i + 1 + ".) Name: " + results[i].first_name + " " + results[i].last_name + " || Role: " + results[i].title + " || Salary: " + results[i].salary + " || Department: " + results[i].name);
                        }
                    }
                    runApp();
                })
            } else if (answer.managers === "Ellie Denton") {
                var query = "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id";
                connection.query(query, function(err, results) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].manager_id === 3) {
                            console.log(i + 1 + ".) Name: " + results[i].first_name + " " + results[i].last_name + " || Role: " + results[i].title + " || Salary: " + results[i].salary + " || Department: " + results[i].name);
                        }
                    }
                    runApp();
                })
            } else if (answer.managers === "Briar Robertson") {
                var query = "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id";
                connection.query(query, function(err, results) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].manager_id === 5) {
                            console.log(i + 1 + ".) Name: " + results[i].first_name + " " + results[i].last_name + " || Role: " + results[i].title + " || Salary: " + results[i].salary + " || Department: " + results[i].name);
                        }
                    }
                    runApp();
                })
            } else {
                runApp();
            }
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
               type: "input",
               name:  "firstName",
               message: "Enter Employee's first name:"
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter the Employee's last name:"
            },
            {
                type: "rawlist",
                name: "roleId",
                message: "What role does this employee have? (enter the number associated with the Role)",
                choices: roleArray
            },
            {
                type: "rawlist",
                name: "managerId",
                message: "Who is this Employee's Manager? (enter the number associated with the Manager)",
                choices: managerArray
            }
        ]).then(function(answer) {
            connection.query(
                "INSERT INTO employees SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.roleId,
                    manager_id: answer.managerId
                },
                function (err) {
                    if (err) throw err;
                    console.log("Successfully added Employee!")
                    runApp();
                }
            )
        })
}
var roleArray = [];

function roles() {
    var query = "SELECT * FROM role"
    connection.query(query, function(err, results) {
        for (var i = 0; i < results.length; i++) {
            roleArray.push({value: results[i].id, name: results[i].title});
        }
    })
    return roleArray;
}
roles();

var managerArray = [];

function managers() {
    var query = "SELECT * FROM employees";
    connection.query(query, function(err, results) {
        for (var i = 0; i < results.length; i++) {
            if (results[i].manager_id === null) {
                managerArray.push({value: results[i].id, name: results[i].first_name + " " + results[i].last_name})
            }
        }
    })
}
managers();

function removeEmployee() {
    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "remove",
                message: "Which Employee would you like to remove? (Enter the number of the corresponding Employee)",
                choices: employeeArray
            }
        ]).then(function(answer) {
            connection.query("DELETE FROM employees WHERE ?", { id: answer.remove }, function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " employee removed!");
                runApp();
            })
        })
}

var employeeArray = [];

function employeeList() {
    var query = "SELECT * FROM employees";
    connection.query(query, function(err, results) {
        for (var i = 0; i < results.length; i++) {
            employeeArray.push({value: results[i].id, name: results[i].first_name + " " + results[i].last_name})
        }
    })
}
employeeList();

function updateEmployees() {
    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "updateEmployee",
                message: "Which Employee's Role would you like to update? (enter the corresponting number)",
                choices: employeeArray
            },
            {
                type: "rawlist",
                name: "updateRole",
                message: "What is this Employee's new Role? (Enter the corresponding number)",
                choices: roleArray
            }
        ]).then(function(answer) {
            var query = "UPDATE employees SET ? WHERE ?";
            connection.query(query,
            [
                {
                    role_id: answer.updateRole
                },
                {
                    id: answer.updateEmployee
                }
            ],
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " Employee updated!");
                runApp();
            }
        )});
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "depName",
                message: "What is the name of your new Department?",
            }
        ]).then(function(answer) {
            connection.query("INSERT INTO department SET ?", { name: answer.depName }, function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " Department created!");
                runApp();
            })
        })
}

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "roleTitle",
                message: "Enter the Title of this Role:"
            },
            {
                type: "input",
                name: "roleSalary",
                message: "What is this Role's salary? (Only enter numbers)"
            },
            {
                type: "rawlist",
                name: "roleDepartment",
                message: "What Department is this Role under? (enter the corresponding number)",
                choices: departmentArray
            }
        ]).then(function(answer) {
            connection.query("INSERT INTO role SET ?",
                {
                    title: answer.roleTitle,
                    salary: answer.roleSalary,
                    department_id: answer.roleDepartment
                }, function(err, res) {
                    if (err) throw err;
                    console.log("Role added!");
                    runApp();
                }    
            )
        })
}

var departmentArray = [];

function departmentList() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, results) {
        for (var i = 0; i < results.length; i++) {
            departmentArray.push({value: results[i].id, name: results[i].name})
        }
    })
}
departmentList();