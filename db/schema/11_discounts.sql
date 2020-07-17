-- Drop and recreate discounts table

DROP TABLE IF EXISTS discounts;

CREATE TABLE discounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  prize_id INTEGER REFERENCES prizes(id)
  percentage REAL NOT NULL,
  start_time TIMESTAMP NOT NULL DEFAULT NOW(),
  end_time TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  created_by INTEGER REFERENCES users(id),
  updated_at TIMESTAMP,
  updated_by INTEGER REFERENCES users(id)
);