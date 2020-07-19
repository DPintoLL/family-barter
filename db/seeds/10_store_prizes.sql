INSERT INTO store_prizes (
  store_id,
  prize_id,
  quantity
) VALUES (
  /* id: 1 */
  /* Devin King item (store_id 1), red sneakers (prize_id 1) */
  /* 2 in stock */
  1,
  1,
  2
),
(
  /* id: 2 */
  /* Devin King item, white t-shirt (prize_id 5) */
  /* 1 in stock */
  1,
  5,
  1
),
(
  /* id: 3 */
  /* Devin King item, silly mask (prize_id 3) */
  /* 0 in stock so should show as out of stock or not available somehow */
  1,
  3,
  0
),
(
  /* id: 4 */
  /* Ayana King item (store_id 2), red sneakers (prize_id 1) */
  /* 4 in stock */
  2,
  1,
  4
),
(
  /* id: 5 */
  /* Ayana King item (store_id 2), silly mask (prize_id 3) */
  /* 1 in stock */
  2,
  3,
  1
),
(
  /* id: 6 */
  /* Ayana King item (store_id 2), rabbit ears (prize_id 4) */
  /* 0 in stock so should show as not available */
  2,
  4,
  0
)