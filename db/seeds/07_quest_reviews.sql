-- quest_reviews seed
-- one review here just to test
INSERT INTO quest_reviews (
  user_id,
  quest_id,
  rating,
  comment
) VALUES (
  /* id: 1
   * Review done by Griffin King (userid: 5)
   * Clean the common room (questid: 5)
   * Rating of 3
   */
   5,
   5,
   3,
   'All done!'
);