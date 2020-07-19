-- Drop and recreate quest_reviews table

DROP TABLE IF EXISTS quest_reviews CASCADE;

CREATE TABLE quest_reviews (
  user_id         INTEGER REFERENCES users(id) NOT NULL,
  quest_id        INTEGER REFERENCES quests(id) NOT NULL,
  rating          INTEGER NOT NULL,
  comment         TEXT,
  PRIMARY KEY (user_id, quest_id)
);