INSERT INTO discounts (
  prize_id, 
  percentage, 
  end_time,
  created_by
) VALUES (
  /* White t-shirt discount (prize_id: 5) */
  /* 10% discount (percentage: 10) */
  /* Ends on July 31, 2020, end of day -- 23:59:59 */
  /* (timestamp: '2020-07-31 23:59:59) */
  /* Created by Devin King (created_by: 1) */
  5,
  10,
  '2020-07-31 23:59:59',
  1
)''

/* an updated discount field, 
 * so updated_at and updated_by fields used
 * 20% discount (percentage: 20) 
 * on red sneakers (prize_id 1)
 * starts July 20, 2020 ('2020-07-20 00:00:00')
 * expires July 26, 2020 EOD ('2020-07-27 23:59:59')
 * created by Ayana King (created_by: 2)
 * created on July 15, 2020, 5pm ('2020-07-15 17:00:00')
 * updated on July 16, 2020, 9am ('2020-07-16 09:00:00')
 */

 INSERT INTO discounts (
   prize_id,
   percentage,
   start_time,
   end_time,
   created_at,
   created_by,
   updated_at,
   updated_by
 ) VALUES (
   1,
   20,
   '2020-07-20 00:00:00',
   '2020-07-26 23:59:59',
   '2020-07-15 17:00:00',
   2,
   '2020-07-16 09:00:00',
   2
 );