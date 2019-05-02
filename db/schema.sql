-- Structure of the database

CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

CREATE TABLE IF NOT EXISTS burgers (
    burger_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    delivered BOOLEAN DEFAULT FALSE,
    ordered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    delivered_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (burger_id)
);
