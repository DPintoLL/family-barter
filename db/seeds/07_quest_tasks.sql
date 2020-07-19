-- Insert seed values into quest_tasks table

INSERT INTO quest_tasks (id, stage_id, name, description, is_completed) VALUES
(1, 1, 'Clean out dishwasher filter', 'Please remember to clean the dishwasher filter before loading the didhwasher!', false),
(2, 1, 'Load dishes into dishwasher', 'Place any dishes currently in the sink into the dishwasher.', false),
(3, 1, 'Fill dispenser with dishwasher detergent', null, false),
(4, 1, 'Turn on dishwasher', 'Remember to change the setting to heavy if there are a lot of dishes.', false),
(5, 2, 'Put utensils away in the drawer', null, false),
(6, 2, 'Put glasses and mugs in the cupboard', null, false),
(7, 2, 'Put plates and bowls on the shelf', null, false);