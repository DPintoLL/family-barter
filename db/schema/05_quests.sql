-- Drop and recreate quests table

DROP TABLE IF EXISTS quests CASCADE;

CREATE TABLE quests (
  id                SERIAL PRIMARY KEY,
  family_id         INTEGER REFERENCES families(id) NOT NULL,
  title             VARCHAR(255) NOT NULL,
  description       VARCHAR(255),
  base_reward       INTEGER NOT NULL DEFAULT 100,
  assigned_to       INTEGER REFERENCES users(id),
  created_at        TIMESTAMP NOT NULL DEFAULT NOW(),
  created_by        INTEGER REFERENCES users(id) NOT NULL,
  updated_at        TIMESTAMP,
  updated_by        INTEGER REFERENCES users(id)
);