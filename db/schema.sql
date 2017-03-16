CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN NOT NULL, 
    time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);




