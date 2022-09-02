DROP DATABASE IF EXISTS `meal_sharing`;
CREATE DATABASE IF NOT EXISTS `meal_sharing`;
USE meal_sharing;

CREATE TABLE meal (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT(600) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT NOT NULL,
    `price` DECIMAL(6,2) NOT NULL,
    `created_date` DATE NOT NULL
) DEFAULT CHARSET UTF8 COMMENT 'mealTable';

CREATE TABLE reservation (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    CONSTRAINT fk_res_meal FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
) DEFAULT CHARSET UTF8 COMMENT 'reservationTable';

CREATE TABLE review (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT(600) NOT NULL,
    meal_id INT NOT NULL,
    stars INT NOT NULL,
    created_date DATE NOT NULL,
    CONSTRAINT fk_rev_meal FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
) DEFAULT CHARSET UTF8 COMMENT 'reviewTable';