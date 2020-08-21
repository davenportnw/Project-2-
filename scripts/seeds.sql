
-- All employees added into the database
use employee_management;
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('John Doe', 'John@oatmega.com', 5124445567, 100000, 'ilovedogs', 1, null, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('Mike Cha ', 'Mike@oatmega.com', 5124445568, 78000, 'ex3tranews', 1, null, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('Ashley Rodriguez', 'Ashley@oatmega.com', 5124637065, 125000, 'f43sadve', 2, 2, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('Kevin Tupik ', 'Kevin@oatmega.com', 5124445545, 65000, 'c0oLK1ds!', 3, null, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('Malia Brown', 'Malia@oatmega.com', 5126578945, 230000, 'c0ding32!', 4, 3, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('Sarah Lourd', 'Sarah@oatmega.com', 5126541234, 183000, '6svna5', 5 , null, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('Tom Allen', 'Tom@oatmega.com', 5124445567, 100000, 'ilovedogs', 1, null, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manage_id, createdAt, updatedAt ) VALUES ('Travis Campedo', 'Travis@oatmega.com', 5124578897, 97000, 'cAtLuv3r21$', 6, 5, '2020-01-01 10:10:10', '2020-01-01 10:10:10');


-- All Departments added into the database --
use employee_management;
INSERT INTO department (name, createdAt, updatedAt) VALUES ('Sales', '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO department (name, createdAt, updatedAt) VALUES ('Engineering', '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO department (name,createdAt, updatedAt) VALUES ('Finance', '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO department (name, createdAt, updatedAt) VALUES ('Legal', '2020-01-01 10:10:10', '2020-01-01 10:10:10');


-- All Roles added into the database --
use employee_management;
INSERT INTO role (title, DepartmentId, createdAt, updatedAt) VALUES ('Sales Lead', 1, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO role (title, DepartmentId, createdAt, updatedAt) VALUES ('Sales Person', 1, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO role (title, DepartmentId, createdAt, updatedAt) VALUES ('Lead Engineer', 2, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO role (title, DepartmentId, createdAt, updatedAt) VALUES ('Software Engineer', 2, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO role (title, DepartmentId, createdAt, updatedAt) VALUES ('Accountant', 3, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO role (title, DepartmentId, createdAt, updatedAt) VALUES ('Legal Team Lead', 4, '2020-01-01 10:10:10', '2020-01-01 10:10:10');
INSERT INTO role (title, DepartmentId, createdAt, updatedAt) VALUES ('Lawyer', 4, '2020-01-01 10:10:10', '2020-01-01 10:10:10');


