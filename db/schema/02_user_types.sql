-- Drop and recreate user_types table

DROP TABLE IF EXISTS user_types;

CREATE TABLE user_types (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  name VARCHAR(255)
);