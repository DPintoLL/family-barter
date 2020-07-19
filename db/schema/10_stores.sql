-- Drop and recreate stores table

DROP TABLE IF EXISTS stores CASCADE;

CREATE TABLE stores (
  id              SERIAL PRIMARY KEY,
  user_id         INTEGER REFERENCES users(id) NOT NULL,
  family_id       INTEGER REFERENCES families(id) NOT NULL
);