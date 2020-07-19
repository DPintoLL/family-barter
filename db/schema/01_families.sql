-- Drop and recreate families table

DROP TABLE IF EXISTS families CASCADE;

CREATE TABLE families (
  id            SERIAL PRIMARY KEY,
  surname       VARCHAR(255),
  created_at    TIMESTAMP NOT NULL DEFAULT NOW()
);