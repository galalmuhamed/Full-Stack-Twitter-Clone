/* Replace with your SQL commands */

CREATE TABLE tweets (
    id BIGSERIAL NOT NULL PRIMARY KEY,
	text TEXT NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    author VARCHAR(50) REFERENCES users(user_name) NOT NULL
);
