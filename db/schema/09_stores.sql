-- Drop and recreate stores table

DROP TABLE IF EXISTS stores;

CREATE TABLE stores (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  family_id INTEGER REFERENCES families(id) NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL
);