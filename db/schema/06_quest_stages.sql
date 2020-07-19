-- Drop and recreate quest_stages table

DROP TABLE IF EXISTS quest_stages CASCADE;

CREATE TABLE quest_stages (
  id                SERIAL PRIMARY KEY,
  quest_id          INTEGER REFERENCES quests(id) NOT NULL,
  index_num         INTEGER DEFAULT 1,
  title             VARCHAR(255) NOT NULL,
  description       VARCHAR(255),
  is_completed      BOOLEAN NOT NULL DEFAULT false
);