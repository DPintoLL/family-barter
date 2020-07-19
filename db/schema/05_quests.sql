-- Drop and recreate quests table

DROP TABLE IF EXISTS quests CASCADE;

CREATE TABLE quests (
  id                SERIAL PRIMARY KEY,
  family_id         INTEGER REFERENCES families(id) NOT NULL,
  title             VARCHAR(255),
  description       VARCHAR(255),
  reward            INTEGER NOT NULL,
  parent_id         INTEGER REFERENCES quests(id),
  index_number      INTEGER DEFAULT 1,
  assigned_to       INTEGER REFERENCES users(id),
  is_completed      BOOLEAN NOT NULL DEFAULT false,
  created_at        TIMESTAMP NOT NULL DEFAULT NOW(),
  created_by        INTEGER REFERENCES users(id) NOT NULL,
  updated_at        TIMESTAMP,
  updated_by        INTEGER REFERENCES users(id)
);