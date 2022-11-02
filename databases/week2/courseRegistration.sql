DROP DATABASE IF EXISTS courseRegistration;
CREATE DATABASE IF NOT EXISTS courseRegistration;
USE courseRegistration;

CREATE TABLE student (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    student_name VARCHAR(255) NOT NULL COMMENT 'student name',
    email VARCHAR(255) NOT NULL COMMENT 'email id',
    phone VARCHAR(255) NOT NULL COMMENT 'phone Number',
    program VARCHAR(255) NOT NULL
) DEFAULT CHARSET UTF8 COMMENT 'studentTable';

CREATE TABLE course (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    course_name VARCHAR(255) NOT NULL COMMENT 'course name',
    credits VARCHAR(255) NOT NULL COMMENT 'credits',
    prerequisite VARCHAR(255) NOT NULL,
    syllabus VARCHAR(255) NOT NULL
) DEFAULT CHARSET UTF8 COMMENT 'courseTable';

CREATE TABLE department (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    department_name VARCHAR(255) NOT NULL COMMENT 'department name'
) DEFAULT CHARSET UTF8 COMMENT 'departmentTable';

CREATE TABLE instructor (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    instructor_name VARCHAR(255) NOT NULL COMMENT 'instructor name',
    department_id INT NOT NULL COMMENT 'department id',
    CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department (id) ON DELETE CASCADE
) DEFAULT CHARSET UTF8 COMMENT 'instructorTable';

CREATE TABLE registration_details (
    student_id INT NOT NULL,
    instructor_id INT NOT NULL,
    course_id INT NOT NULL,
    time DATE NOT NULL,
    section_num INT NOT NULL,
    room_id INT NOT NULL,
    semester CHAR(2),
    PRIMARY KEY(`student_id`, `instructor_id`),
    CONSTRAINT fk_registration_student FOREIGN KEY(student_id) REFERENCES student (id) ON DELETE CASCADE,
    CONSTRAINT fk_registration_instructor FOREIGN KEY(instructor_id) REFERENCES instructor (id) ON DELETE CASCADE,
    CONSTRAINT fk_registration_course FOREIGN KEY(course_id) REFERENCES course (id) ON DELETE CASCADE
) DEFAULT CHARSET UTF8 COMMENT 'registration_detailsTable';