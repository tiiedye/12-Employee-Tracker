DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
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

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bryan", "Swarthout", 1, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Wilson", "Lam", 2, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jace", "Clements", 2, 1);

SELECT * FROM employees;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Ellie", "Denton", 3, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Durston", 4, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Briar", "Robertson", 5, NULL);

SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id;