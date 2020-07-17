-- Drop and recreate user_prizes table

DROP TABLE IF EXISTS user_prizes;

CREATE TABLE user_prizes (
  user_id INTEGER REFERENCES users(id) NOT NULL,
  prize_id INTEGER REFERENCES prizes(id) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (user_id, prize_id)
);