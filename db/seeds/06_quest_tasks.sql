-- quest_tasks seed file
INSERT INTO quest_tasks (
  quest_id,
  name,
  description,
  is_completed
) VALUES (
  /* three subtasks of an incomplete child quest
   * id: 1
   * subtask of questid: 2 (load the dishwasher)
   */
  2,
  'Clean the dishwasher filter',
  'Please remember to clean the dishwasher filter before the dishes get washed!',
  false
),
(
  /* id: 2
   * subtask of questid: 2 (load the dishwasher)
   */
  2,
  'Load the dishes into the dishwasher.',
  null,
  false
),
(
  /* id: 3
   * subtask of questid: 2 (load the dishwasher)
   */
  2,
  'Fill the chamber with dishwasher fluid.',
  null,
  false
),
(
  /* id: 4
   * subtask of questid: 2 (load the dishwasher)
   */
  2,
  'Turn the dishwasher on.',
  null,
  false
);