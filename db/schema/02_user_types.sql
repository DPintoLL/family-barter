-- Drop and recreate user_types table

DROP TABLE IF EXISTS user_types CASCADE;

CREATE TABLE user_types (
  id              SERIAL PRIMARY KEY,
  name            VARCHAR(255)
);