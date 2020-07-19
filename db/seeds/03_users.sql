-- users seed file
INSERT INTO users (
  family_id, 
  first_name, 
  last_name,
  email,
  password_hash,
  type_id,
  invited_by
) VALUES (
  /* family of 5, the King family
   * Devin, Ayana the parent accounts
   * Devin the admin account
   * Brent/Lonny/Griffin child accounts
   */
  1,
  "Devin",
  "King",
  "devin@king.com",
  "PASSWORD_HASH_HERE",
  1,
  null
),
(
  1,
  "Ayana",
  "King",
  "ayana@king.com",
  "PASSWORD_HASH_HERE",
  2,
  1
),
(
  1,
  "Brent",
  "King",
  "brent@king.com",
  "PASSWORD_HASH_HERE",
  3,
  1
),
(
  "Lonny",
  "King",
  "lonny@king.com",
  "PASSWORD_HASH_HERE",
  3,
  1
),
(
  "Griffin",
  "King",
  "griffin@king.com",
  "PASSWORD_HASH_HERE",
  3,
  1
);
