-- Drop and recreate quest_reviews table

DROP TABLE IF EXISTS quest_reviews;

CREATE TABLE quest_reviews (
  user_id INTEGER REFERENCES users(id) NOT NULL,
  quest_id INTEGER REFERENCES quest(id) NOT NULL,
  rating INTEGER NOT NULL,
  PRIMARY KEY (user_id, quest_id)
);