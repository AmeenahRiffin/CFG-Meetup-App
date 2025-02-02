CREATE DATABASE neighbourhood_app_data;

USE neighbourhood_app_data;

CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_f_name VARCHAR(20) NOT NULL,
	user_l_name VARCHAR(50) NOT NULL,
	user_password VARCHAR(300) NOT NULL, 
	user_email VARCHAR(100) UNIQUE NOT NULL, 
	user_postcode VARCHAR(10) NOT NULL,
	user_dob DATE 
	);

CREATE TABLE general_posts (
	post_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	post_category ENUM('Schools & Education', 'Real Estate & Housing', 'Local Services & Amenities', 'Safety & Security', 'Local Activities & Volunteering', 'Lost & Found', 'Other') NOT NULL DEFAULT 'Other',
	post_content TEXT, -- limited to 65535 characters
	post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	);
	
	
CREATE TABLE events(
	event_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT, -- used to track which user has created the event not to track atendees
	event_title TINYTEXT NOT NULL,
	event_type ENUM('Cultural Events', 'Fundraising Events', 'Educational Events','Recreational Events','Seasonal Events','Other') DEFAULT 'Other' NOT NULL,
	event_content TEXT,
	event_date DATE NOT NULL,
	event_location VARCHAR(100),
	event_postcode VARCHAR(10) NOT NULL,
	event_price DECIMAL(8,2) NOT NULL DEFAULT(0.00),
	event_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	);


INSERT INTO users (user_f_name, user_l_name, user_password, user_email, user_postcode, user_dob)
VALUES
('John', 'Doe', 'password1!', 'johndoe1@example.com', 'SW1A 1AA', '1990-01-15'),
('Jane', 'Smith', 'password2!', 'janesmith2@example.com', 'SW1A 1AA', '1985-07-20'),
('Alice', 'Johnson', 'password3!', 'alicejohnson3@example.com', 'W1A 0AX', '2000-03-25'),
('Bob', 'Brown', 'password4!', 'bobbrown4@example.com', 'W1A 0AX', '1995-11-08'),
('Charlie', 'Adams', 'password5!', 'charlieadams5@example.com', 'M1 1AE', '1992-05-19'),
('Diana', 'White', 'password6!', 'dianawhite6@example.com', 'M1 1AE', '1997-08-29'),
('Edward', 'Taylor', 'password7!', 'edwardtaylor7@example.com', 'B1 1AA', '1989-02-14'),
('Fiona', 'Black', 'password8!', 'fionablack8@example.com', 'B1 1AA', '1993-06-23'),
('George', 'Green', 'password9!', 'georgegreen9@example.com', 'EC1A 1BB', '1998-12-04'),
('Helen', 'King', 'password10!', 'helenking10@example.com', 'EC1A 1BB', '1994-09-17');

INSERT INTO general_posts (user_id, post_category, post_content)
VALUES
(1, 'Schools & Education', 'Looking for primary school recommendations in my area.'),
(2, 'Real Estate & Housing', 'Is anyone renting a flat in the SW1A postcode?'),
(3, 'Local Services & Amenities', 'Need a good mechanic. Any recommendations?'),
(4, 'Safety & Security', 'Break-in reported last night. Stay vigilant.'),
(5, 'Lost & Found', 'Lost a black wallet. Please contact me if found.'),
(6, 'Local Activities & Volunteering', 'Volunteers needed for a community garden project.'),
(7, 'Safety & Security', 'Car thefts reported. Watch out for suspicious activity.'),
(8, 'Lost & Found', 'Found a dog collar. Message if it’s yours.'),
(9, 'Local Services & Amenities', 'Looking for a local electrician. Any suggestions?'),
(10, 'Other', 'Community meeting scheduled for next week.'),
(1, 'Local Activities & Volunteering', 'Street clean-up this Saturday. Join us!'),
(2, 'Real Estate & Housing', 'Selling a 2-bedroom flat. Contact me for details.'),
(3, 'Schools & Education', 'Tutors needed for evening classes.'),
(4, 'Local Services & Amenities', 'Best cafes in town? Share your recommendations!'),
(5, 'Lost & Found', 'Lost house keys. Black keychain with a red tag.'),
(6, 'Safety & Security', 'Suspicious activity reported nearby. Police informed.'),
(7, 'Local Activities & Volunteering', 'Charity bake sale this Sunday.'),
(8, 'Schools & Education', 'Free coding classes for kids starting next month.'),
(9, 'Lost & Found', 'Lost phone. White iPhone with a green case.'),
(10, 'Other', 'Public transport issues. Join the discussion.');

INSERT INTO events (user_id, event_title, event_type, event_content, event_date, event_location, event_postcode, event_price)
VALUES
(1, 'Charity Concert', 'Fundraising Events', 'Join us for a night of music and fundraising.', '2024-12-10', 'Community Hall', 'SW1A 1AA', 15.00),
(2, 'Local Market', 'Recreational Events', 'Shop for handmade goods and local produce.', '2024-11-25', 'Town Square', 'SW1A 1AA', 0.00),
(3, 'Art Exhibition', 'Cultural Events', 'Explore artwork by local artists.', '2024-12-01', 'Art Gallery', 'W1A 0AX', 10.00),
(4, 'Comedy Night', 'Recreational Events', 'An evening of laughs with local comedians.', '2024-12-15', 'Theatre', 'W1A 0AX', 20.00),
(5, 'Charity Run', 'Fundraising Events', '5K run to support local schools.', '2024-11-30', 'City Park', 'M1 1AE', 0.00),
(6, 'Book Fair', 'Educational Events', 'Discounted books and author signings.', '2024-12-05', 'Library', 'M1 1AE', 5.00),
(7, 'Community Workshop', 'Educational Events', 'Learn basic carpentry skills.', '2024-11-22', 'Workshop Centre', 'B1 1AA', 25.00),
(8, 'Cooking Class', 'Educational Events', 'Master the art of pasta making.', '2024-12-03', 'Culinary School', 'B1 1AA', 30.00),
(9, 'Christmas Fair', 'Seasonal Events', 'Festive market with crafts and food.', '2024-12-20', 'Town Square', 'EC1A 1BB', 0.00),
(10, 'Tech Meetup', 'Educational Events', 'Discuss the latest tech trends.', '2024-11-27', 'Conference Room', 'EC1A 1BB', 0.00),
(1, 'Yoga Class', 'Recreational Events', 'Relax and rejuvenate with yoga.', '2024-12-07', 'Community Centre', 'SW1A 1AA', 10.00),
(2, 'Gardening Workshop', 'Educational Events', 'Learn to grow your own herbs.', '2024-11-29', 'Botanical Garden', 'SW1A 1AA', 15.00),
(3, 'Film Screening', 'Cultural Events', 'Watch a classic film outdoors.', '2024-12-11', 'Open-Air Cinema', 'W1A 0AX', 12.00),
(4, 'Dance Workshop', 'Educational Events', 'Learn salsa dancing basics.', '2024-12-02', 'Dance Studio', 'W1A 0AX', 18.00),
(5, 'Charity Auction', 'Fundraising Events', 'Bid on exciting items for a cause.', '2024-12-08', 'Auction Hall', 'M1 1AE', 0.00),
(6, 'Music Festival', 'Cultural Events', 'Enjoy live music from local bands.', '2024-12-16', 'Main Square', 'M1 1AE', 25.00),
(7, 'Chess Tournament', 'Educational Events', 'Compete in a community chess challenge.', '2024-11-30', 'Community Hall', 'B1 1AA', 5.00),
(8, 'Holiday Party', 'Seasonal Events', 'Celebrate the holidays with neighbours.', '2024-12-24', 'Town Hall', 'B1 1AA', 20.00),
(9, 'Bike Tour', 'Recreational Events', 'Cycle through scenic routes.', '2024-12-09', 'Park Entrance', 'EC1A 1BB', 0.00),
(10, 'Photography Workshop', 'Educational Events', 'Learn basic photography skills.', '2024-11-23', 'Studio', 'EC1A 1BB', 20.00);
