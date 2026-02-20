CREATE DATABASE IF NOT EXISTS vivrecard;

USE vivrecard;

CREATE TABLE
    IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        avatar VARCHAR(255) DEFAULT NULL,
        is_verified BOOLEAN DEFAULT FALSE,
        latitude DECIMAL(10, 8),
        longitude DECIMAL(11, 8),
        is_online BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );