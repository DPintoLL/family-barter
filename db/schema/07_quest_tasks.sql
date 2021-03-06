-- Drop and recreate quest_tasks table

DROP TABLE IF EXISTS quest_tasks CASCADE;

CREATE TABLE quest_tasks (
  id            SERIAL PRIMARY KEY,
  stage_id      INTEGER REFERENCES quest_stages(id) NOT NULL,
  index_num     INTEGER DEFAULT 1,
  name          VARCHAR(255) NOT NULL,
  description   VARCHAR(255),
  is_completed  BOOLEAN NOT NULL DEFAULT false
);