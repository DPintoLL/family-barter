-- Drop and recreate families table

DROP TABLE IF EXISTS families;

CREATE TABLE families (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  surname VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);