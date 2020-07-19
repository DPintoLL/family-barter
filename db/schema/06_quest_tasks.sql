-- Drop and recreate quest_tasks table

DROP TABLE IF EXISTS quest_tasks CASCADE;

CREATE TABLE quest_tasks (
  id            SERIAL PRIMARY KEY,
  quest_id      INTEGER REFERENCES quests(id) NOT NULL,
  name          VARCHAR(255) NOT NULL,
  description   VARCHAR(255),
  is_completed  BOOLEAN NOT NULL DEFAULT false
);