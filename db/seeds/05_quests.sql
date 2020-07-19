-- quests seed file
INSERT INTO quests (
  family_id,
  title,
  description,
  reward,
  parent_id
  index_number,
  assigned_to,
  is_completed,
  created_by
) VALUES (
  /* id: 1
   * do the dishes, top-level quest
   * Intending for there to be a top parent quest then two quests underneath
   * load the dishwasher and unload the dishwasher
   * created by Devin King (userid: 1, family id: 1)
   * reward 300 since there is 2 quests, 100, 200
   */
  1,
  'Do the dishes!',
  'Load and unload the dishwasher',
  300,
  null,
  default,
  null,
  false,
  1
),
(
  /* id: 2
   * load the dishwasher
   * no one's taken the parent quest so unassigned
   */
  1,
  'Load the dishwasher',
  null,
  100,
  1,
  1,
  null,
  false,
  1
),
(
  /* id: 3
   * unload the dishwasher
   *
   * index number 2 since the second quest in the group
   */
  1,
  'Unload the dishwasher',
  null,
  200,
  1,
  2,
  null,
  false,
  1
),
(
  /* id: 4
   * single quest, assigned but not completed
   * Assigned to Brent King, userid: 3
   * Walk the dog
   * Created by Ayana King (userid: 2)
   */
  1,
  'Walk the dog',
  'Please walk the dog at some point during the day.',
  100,
  null,
  default,
  3,
  false,
  2
),
(
  /* id: 5
   * single quest, assigned and completed
   * Assigned to Griffin King, userid: 5
   * Clean the common room
   * Created by Devin King (userid: 1)
   */
  1,
  'Clean the common room',
  'Please clean the common room.',
  100,
  null,
  default,
  5,
  true,
  1
);

/*
 * since updated quests, a different insert statement since we're adding
 * updated_at and updated_by fields
 */
INSERT INTO quests (
  family_id,
  title,
  description,
  reward,
  parent_id
  index_number,
  assigned_to,
  is_completed,
  created_by,
  updated_at,
  updated_by
) VALUES
(
  /* id: 6
   * top-level quest, 2 quests underneath
   * Created, then updated later. Should show as edited.
   * Declutter the backyard
   * Created by Devin King (userid: 1)
   * Assigned to Lonny King (userid: 4)
   */
  1,
  'Declutter the backyard',
  'Rake the lawn and clear the toys off the patio.',
  300,
  null,
  default,
  4,
  false,
  1,
  '2020-07-18 16:37:00',
  1
);

INSERT INTO quests (
  family_id,
  title,
  description,
  reward,
  parent_id
  index_number,
  assigned_to,
  is_completed,
  created_by
) VALUES (
  /* id: 7
   * first child quest, completed
   * parent_id: 6 (Rake the lawn)
   * Assigned to Lonny King (id: 4)
   * Created by Devin King (id: 1)
   */
  1,
  'Rake the lawn',
  null,
  100,
  6,
  1,
  4,
  true,
  1
),
(
  /* id: 8
   * second child quest, incomplete
   */
  1,
  'Clear the toys off the patio',
  'Put them away in the shed.',
  200,
  6,
  2,
  4,
  false,
  1
);
