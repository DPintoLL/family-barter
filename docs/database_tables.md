# Database Tables

## Families Table

Name: families <br />
Fields:

- id SERIAL PRIMARY KEY
- surname VARCHAR
- created_at TIMESTAMP NOT NULL DEFAULT NOW()

## User Types Table

Name: user_types <br />
Fields:

- id SERIAL PRIMARY KEY
- name VARCHAR NOT NULL

## Users Table

Name: users <br />
Fields:

- id SERIAL PRIMARY KEY
- family_id INTEGER REFERENCES families(id)
- first_name VARCHAR NOT NULL
- last_name VARCHAR NOT NULL
- email VARCHAR(255) NOT NULL UNIQUE
- password_hash VARCHAR
- balance INTEGER NOT NULL DEFAULT 0
- type_id INTEGER REFERENCES user_types(id) NOT NULL
- invited_by INTEGER REFERENCES users(id)
- created_at TIMESTAMP NOT NULL DEFAULT NOW()

## Registration Codes Table

Name: registration_codes <br />
Fields:

- id SERIAL PRIMARY KEY
- family_id INTEGER REFERENCES families(id) NOT NULL
- type_id INTEGER REFERENCES user_types(id) NOT NULL
- code VARCHAR NOT NULL UNIQUE
- created_at TIMESTAMP NOT NULL DEFAULT NOW()

## Quests Table

Name: quests <br />
Fields:

- id SERIAL PRIMARY KEY
- family_id INTEGER REFERENCES families(id) NOT NULL
- title VARCHAR
- description VARCHAR(255)
- gold_amount INTEGER
- parent_id INTEGER REFERENCES quest(id)
- index_number INTEGER
- assigned_to INTEGER REFERENCES users(id)
- is_completed BOOLEAN
- created_at TIMESTAMP NOT NULL DEFAULT NOW()
- created_by INTEGER REFERENCES users(id) NOT NULL
- updated_at TIMESTAMP
- updated_by INTEGER REFERENCES users(id)

## Quest tasks Table

Name: quest_tasks <br />
Fields:

- id SERIAL PRIMARY KEY
- quest_id INTEGER REFERENCES quest(id) NOT NULL
- name VARCHAR
- description VARCHAR(255)
- is_completed BOOLEAN

## Quest Reviews Table

Name: quest_reviews <br />
Fields:

- user_id INTEGER REFERENCES users(id) NOT NULL
- quest_id INTEGER REFERENCES quest(id) NOT NULL
- rating INTEGER NOT NULL
- PRIMARY KEY (user_id, quest_id)
  (use composite PK of user_id and quest_id)

## Prizes Table

Name: prizes <br />
Fields:

- id SERIAL PRIMARY KEY
- family_id INTEGER REFERENCES families(id) NOT NULL
- name VARCHAR
- description VARCHAR(255)
- cost INTEGER NOT NULL
- icon_url VARCHAR
- icon_color VARCHAR
- is_shared BOOLEAN default true
- created_at TIMESTAMP NOT NULL DEFAULT NOW()
- created_by INTEGER REFERENCES users(id) NOT NULL
- updated_at TIMESTAMP
- updated_by INTEGER REFERENCES users(id)

## Stores Table

Name: stores <br />
Fields:

- id SERIAL PRIMARY KEY
- family_id INTEGER REFERENCES families(id)
- user_id INTEGER REFERENCES users(id)

## Store Prizes Table

Name: store_prizes <br />
Fields:

- store_id INTEGER REFERENCES store(id)
- prize_id INTEGER REFERENCES reward(id)
- quantity INTEGER
- PRIMARY KEY (store_id, prize_id)
  (use composite PK of store_id and prize_id)

## Store Discounts Table

Name: store_discounts <br />
Fields:

- id SERIAL PRIMARY KEY
- reward_id INTEGER REFERENCES reward(id)
- discount REAL NOT NULL
- start_TIMESTAMP TIMESTAMP NOT NULL DEFAULT NOW()
- end_TIMESTAMP TIMESTAMP NOT NULL
- created_at TIMESTAMP NOT NULL DEFAULT NOW()
- created_by INTEGER REFERENCES users(id)
- updated_at TIMESTAMP
- updated_by INTEGER REFERENCES users(id)

## User Rewards

Name: user_prizes <br />
Fields:

- user_id INTEGER REFERENCES users(id)
- prize_id INTEGER REFERENCES prizes(id)
- quantity INTEGER
- PRIMARY KEY (user_id, reward_id)
  (use composite PK of user_id and prize_id)
