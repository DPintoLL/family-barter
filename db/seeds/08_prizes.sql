INSERT INTO prizes (
  family_id,
  name,
  description,
  cost,
  icon_url,
  icon_color,
  is_shared,
  created_by
) VALUES (
  /* red sneakers */
  /* id: 1 */
  1,
  'Red Sneakers',
  'These are a pair of cool red sneakers!',
  50,
  /* placeholders for icon and colour */
  'ICON_URL_HERE',
  '#FFFFFF',
  true,
  1
),
(
  /* blue kite */
  /* id: 2 */
  1,
  'Blue Kite',
  'Let''s all go fly a kite together!',
  85,
  'ICON_URL_HERE',
  '#FFFFFF',
  true,
  1
),
(
  /* Silly Mask */
  /* id: 3 */
  1,
  'Silly Mask',
  'This fun mask is perfect for costume parties!',
  25,
  'ICON_URL_HERE',
  '#FFFFFF',
  true,
  1
),
(
  /* Item exclusive to Ayana King store (created_at value: 2) */
  /* Rabbit Ears */
  /* id: 4 */
  1,
  'Rabbit Ears',
  'Put these on for some added bunny style!',
  25,
  'ICON_URL_HERE',
  '#FFFFFF',
  false,
  2
),
(
  /* Item exclusive to Devin King store (created_at value: 1) */
  /* White T-Shirt */
  /* id: 5 */
  1,
  'White T-Shirt',
  'A great shirt for wearing anywhere!',
  70,
  'ICON_URL_HERE',
  '#FFFFFF',
  false,
  1
);