//=====================================================
// Access Mysql Command Root
//=====================================================

	mysql -u root -p

//=====================================================
// Show databases
//=====================================================

	SHOW DATABASES;

//=====================================================
// Create database
//=====================================================

	CREATE DATABASE database name;

//=====================================================
// Drop Database
//=====================================================

	DROP DATABASE database name;

//=====================================================
// Use Database
//=====================================================

	USE events

//=====================================================
// Show table in used databased
//=====================================================

	SHOW tables; 

//=====================================================
// Create Table
//=====================================================

	CREATE TABLE potluck (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
		name VARCHAR(20),
		food VARCHAR(30),
		confirmed CHAR(1), 
	signup_date DATE);

//=====================================================
// Describe table
//=====================================================

	DESCRIBE potluck;


//=====================================================
// Describe table
//=====================================================

UPDATE User_ SET password_='test' WHERE userId=10198;