DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role VARCHAR(50) NOT NULL,
    manager VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Legal");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 3);

SELECT * FROM role;

INSERT INTO employees (first_name, last_name, role, manager)
VALUES ("Bryan", "Swarthout", "Lead Engineer", NULL);

INSERT INTO employees (first_name, last_name, role, manager)
VALUES ("Wilson", "Lam", "Software Engineer", "Bryan Swarthout");

INSERT INTO employees (first_name, last_name, role, manager)
VALUES ("Jace", "Clements", "Software Engineer", "Bryan Swarthout");

SELECT * FROM employees;

INSERT INTO employees (first_name, last_name, role, manager)
VALUES ("Ellie", "Denton", "Sales Lead", NULL);

INSERT INTO employees (first_name, last_name, role, manager)
VALUES ("Jessica", "Durston", "Salesperson", "Ellie Denton");

INSERT INTO employees (first_name, last_name, role, manager)
VALUES ("Briar", "Robertson", "Lawyer", NULL);

SELECT employees.first_name, employees.last_name, employees.role_id, employees.manager_id FROM employees LEFT JOIN role ON employees.role_id = role.title;
