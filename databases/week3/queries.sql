--Meal
--Get all meals
SELECT * FROM meal;
--Add a new meal
INSERT INTO `meal` (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) VALUES (1,'Palak Paneer', 'Paneer cubes in palak grvay', 'spice kitchen,Lyngby', '2022-05-10 10:00:00', 10, 325.25, '2022-05-10');
INSERT INTO `meal` (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) VALUES (2,'Garlic Naan', 'All purpose flour bread topped with garlic butter', 'spice kitchen,Lyngby', '2022-05-10 10:00:00', 20, 25.19, '2022-05-10');
INSERT INTO `meal` (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) VALUES (3,'Gulab Jamun', 'Dessert in sugar syrup', 'spice kitchen,Gladsaxe', '2022-08-10 10:00:00', 40, 30.09, '2022-07-10');
INSERT INTO `meal` (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) VALUES (4,'Vegan Pizza', 'pizza made with all vegan ingredients', 'Dominos,Gladsaxe', '2022-08-25 12:00:00', 3, 60.79, '2022-08-25');

--Get a meal with any id, fx 1
SELECT * from meal WHERE id = 1;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET `title` = 'Garlic Butter Naan', `price` = 20.04, `max_reservations` = 15 WHERE id = 2;

--Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 2;

--Reservation
--Get all reservations
SELECT * FROM reservation;
--Add a new reservation
INSERT INTO `reservation` (`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`) VALUES (1, 4, 1, '2022-08-10', '71890997', 'Vinod', 'vin@gmail.com');
INSERT INTO `reservation` (`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`) VALUES (2, 2, 1, '2022-08-30', '71390997', 'shravya', 'shr@gmail.com');
INSERT INTO `reservation` (`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`) VALUES (3, 1, 3, '2022-08-03', '71490997', 'vaishu', 'vai@gmail.com');
INSERT INTO `reservation` (`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`) VALUES (4, 1, 1, '2022-08-01', '72890997', 'akshitha', 'aks@gmail.com');
INSERT INTO `reservation` (`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`) VALUES (5, 3, 4, '2022-08-30', '72790997', 'manju', 'maj@gmail.com');

--Get a reservation with any id, fx 1
SELECT * from reservation WHERE id = 1;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET `number_of_guests` = 3, `contact_name` = 'shravya G' WHERE id = 2;

--Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 2;

--Review
--Get all reviews
SELECT * FROM review;
--Add a new review
INSERT INTO `review` (`id`,`title`,`description`,`meal_id`,`stars`,`created_date`) VALUES (1, 'Good', 'tastes good', 1, 3, '2022-08-10');
INSERT INTO `review` (`id`,`title`,`description`,`meal_id`,`stars`,`created_date`) VALUES (2, 'Average', 'tastes okay', 1, 2, '2022-08-20');
INSERT INTO `review` (`id`,`title`,`description`,`meal_id`,`stars`,`created_date`) VALUES (3, 'Bad', 'Quality is not good', 1, 1, '2022-08-03');
INSERT INTO `review` (`id`,`title`,`description`,`meal_id`,`stars`,`created_date`) VALUES (4, 'Good', 'tastes good', 3, 3, '2022-08-13');

--Get a review with any id, fx 1
SELECT * FROM review WHERE id = 1;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET `stars` = 4, `description` = 'tastes yummy' WHERE id = 1;

--Delete a review with any id, fx 1
DELETE FROM review WHERE id = 2;

--Functionality
--Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE `price` < 90;

--Get meals that still has available reservations
SELECT meal.id, meal.title, max_reservations, (max_reservations - SUM(number_of_guests)) AS 'available_reservations' FROM meal
INNER JOIN reservation ON meal.id = reservation.meal_id
GROUP BY meal.id HAVING available_reservations > 0;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%alak%';

--Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2022-04-10' AND '2022-06-10';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 2;

--Get the meals that have good reviews
SELECT * FROM meal 
INNER JOIN review ON meal.id = review.meal_id
WHERE review.stars >= 3;

--Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE meal_id = 1 ORDER BY created_date;

--Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, AVG(review.stars) AS 'avg_review' FROM meal
INNER JOIN review ON meal.id = review.meal_id
GROUP BY meal_id ORDER BY avg_review DESC;