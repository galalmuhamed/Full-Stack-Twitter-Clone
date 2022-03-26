/* Replace with your SQL commands */

CREATE TABLE replies (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    parent_tweet BIGINT REFERENCES tweets(id),
    replies BIGINT REFERENCES tweets(id)
);

