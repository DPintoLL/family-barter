-- Drop and recreate quest_tasks table

DROP TABLE IF EXISTS quest_tasks;

CREATE TABLE quest_tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  quest_id INTEGER REFERENCES quest(id) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  is_completed BOOLEAN NOT NULL DEFAULT false
);