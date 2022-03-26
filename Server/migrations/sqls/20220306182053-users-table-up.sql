/* Replace with your SQL commands */

CREATE TABLE users (
  	id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    avatar_url VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULl,
    password VARCHAR(100) NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0)
);
