-- Drop and recreate discounts table

DROP TABLE IF EXISTS discounts CASCADE;

CREATE TABLE discounts (
  id              SERIAL PRIMARY KEY,
  prize_id        INTEGER REFERENCES prizes(id),
  percentage      REAL NOT NULL,
  start_time      TIMESTAMP NOT NULL DEFAULT NOW(),
  end_time        TIMESTAMP NOT NULL,
  created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
  created_by      INTEGER REFERENCES users(id),
  updated_at      TIMESTAMP,
  updated_by      INTEGER REFERENCES users(id)
);