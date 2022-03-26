/* Replace with your SQL commands */

CREATE TABLE likes (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   user_id VARCHAR(50) REFERENCES users(user_name) NOT NULL,
   tweet_id BIGINT REFERENCES tweets(id) NOT NULL
);