-- Drop and recreate prizes table

DROP TABLE IF EXISTS prizes CASCADE;

CREATE TABLE prizes (
  id              SERIAL PRIMARY KEY,
  family_id       INTEGER REFERENCES families(id) NOT NULL,
  name            VARCHAR(255) NOT NULL,
  description     VARCHAR(255),
  cost            INTEGER NOT NULL,
  icon_url        VARCHAR(255),
  icon_color      VARCHAR(7),
  is_shared       BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
  created_by      INTEGER REFERENCES users(id) NOT NULL,
  updated_at      TIMESTAMP,
  updated_by      INTEGER REFERENCES users(id)
);