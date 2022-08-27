--Part 1: Working with tasks
--1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (id, title, description, created, updated, due_date, status_id, user_id) VALUES (36, 'Learn HYF Week2 lesson', 'ERD, Normalization, etc.', '2022-08-22 03:41:53', '2022-08-25 09:19:56', '2022-10-11 10:13:42', 2, NULL);

--2. Change the title of a task
UPDATE task SET title = 'Do HYF week2 Homework' WHERE id = 36;

--3,4. Change a task due date and Change a task status
UPDATE task SET due_date = '2022-10-03 07:19:56', status_id = 1 WHERE id = 36;

--5. Mark a task as complete
UPDATE task SET status_id = 3 WHERE id = 36;

--6. Delete a task
DELETE FROM task WHERE id = 36;

--Part 2: School database
DROP DATABASE IF EXISTS school;
CREATE DATABASE IF NOT EXISTS school;
Use school;
--Create Class Table
CREATE TABLE class (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255) NOT NULL COMMENT 'class name',
    begins DATE NOT NULL COMMENT 'begin Time',
    ends DATE NOT NULL COMMENT 'end Time'
) DEFAULT CHARSET UTF8 COMMENT 'classTable';

--Create student TABLE
CREATE TABLE student (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255) NOT NULL COMMENT 'student name',
    email VARCHAR(255) NOT NULL COMMENT 'email id',
    phone VARCHAR(255) NOT NULL COMMENT 'phone Number',
    class_id INT NOT NULL,
    CONSTRAINT fk_class FOREIGN KEY(class_id) REFERENCES class (id) ON DELETE CASCADE
) DEFAULT CHARSET UTF8 COMMENT 'studentTable';

--Create an index on the name column of the student table.
CREATE INDEX idx_sname ON student (name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status ENUM('not-started','ongoing','finished') NOT NULL;

SHOW CREATE table class; 
show CREATE TABLE student;

--Part 3: More queries
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT utk.task_id, tk.title, utk.user_id, ur.email FROM task AS tk
INNER JOIN user_task AS utk ON tk.id = utk.task_id
INNER JOIN user AS ur ON ur.id = utk.user_id
WHERE ur.email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT utk.task_id, tk.title, ur.name AS 'user', st.name AS 'status' FROM task AS tk
INNER JOIN user_task AS utk ON tk.id = utk.task_id
INNER JOIN user AS ur ON ur.id = utk.user_id
INNER JOIN status AS st ON st.id = tk.status_id
WHERE ur.name = 'Donald Duck' AND st.name = 'Not started';

--Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT utk.task_id, tk.title, ur.name AS 'user', tk.created FROM task AS tk
INNER JOIN user_task AS utk ON tk.id = utk.task_id
INNER JOIN user AS ur ON ur.id = utk.user_id
WHERE ur.name = 'Maryrose Meadows' AND month(created) = 09;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc
SELECT COUNT(*) AS 'num_of_tasks', month(created) AS 'created_month' FROM task GROUP BY month(created);