-- Note: This is the schema made by Carly. This is not finalised yet, to be updated by Carly.

USE neighbourhood_app_data;
CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_f_name VARCHAR(20) NOT NULL,
	user_l_name VARCHAR(50) NOT NULL,
	user_password VARCHAR(300) NOT NULL,
	user_email VARCHAR(100) UNIQUE NOT NULL,
	user_postcode VARCHAR(10) NOT NULL,
	user_dob DATE
	)
CREATE TABLE general_posts (
	post_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	post_category ENUM('General', 'Alert', 'Question', 'Lost & Found', 'Recommendation', 'Other') NOT NULL DEFAULT 'OTHER',
	post_content TEXT, --limited to 65535 characters
	post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	)
	
	
CREATE TABLE for_sale (
	sale_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	item_category ENUM('Baby & Children', 'Home', 'Garden', 'Clothing', 'Other') NOT NULL DEFAULT 'OTHER',
	item_title TINYTEXT NOT NULL,
	item_content TEXT,
	item_price DECIMAL(8,2) NOT NULL DEFAULT(0.00),
	item_status ENUM('available', 'sold') DEFAULT 'available',
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	)
	
CREATE TABLE events(
	event_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT, --used to track which user has created the event not to track atendees
	event_title TINYTEXT NOT NULL,
	event_type ENUM('Community', 'Class', 'Baby & Children', 'Sports', 'Arts & Craft', 'Pets', 'Charity', 'Outdoor', 'Other') DEFAULT 'Other' NOT NULL,
	event_content TEXT,
	event_date DATE NOT NULL,
	event_location VARCHAR(100),
	event_postcode VARCHAR(10) NOT NULL,
	event_price DECIMAL(8,2) NOT NULL DEFAULT(0.00),
	event_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	)