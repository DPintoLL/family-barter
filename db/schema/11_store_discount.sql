-- Drop and recreate store_discounts table

DROP TABLE IF EXISTS store_discounts;

CREATE TABLE store_discounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  prize_id INTEGER REFERENCES prizes(id)
  discount REAL NOT NULL,
  start_TIMESTAMP TIMESTAMP NOT NULL DEFAULT NOW(),
  end_TIMESTAMP TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  created_by INTEGER REFERENCES users(id),
  updated_at TIMESTAMP,
  updated_by INTEGER REFERENCES users(id)
);