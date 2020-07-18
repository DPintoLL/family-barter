-- Drop and recreate users table

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  family_id INTEGER REFERENCES families(id)
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  balance INTEGER NOT NULL DEFAULT 0,
  type_id INTEGER REFERENCES user_types(id) NOT NULL,
  invited_by INTEGER REFERENCES users(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
