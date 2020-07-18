-- Drop and recreate registration_codes table

DROP TABLE IF EXISTS registration_codes;

CREATE TABLE registration_codes (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  family_id INTEGER REFERENCES families(id) NOT NULL,
  type_id INTEGER REFERENCES user_types(id) NOT NULL,
  code UUID NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
);