-- Drop and recreate store_prizes table

DROP TABLE IF EXISTS store_prizes;

CREATE TABLE store_prizes (
  store_id INTEGER REFERENCES stores(id) NOT NULL,
  prize_id INTEGER REFERENCES prizes(id) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (store_id, prize_id)
);