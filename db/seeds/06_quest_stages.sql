-- Insert seed values into quest_stages table

INSERT INTO quest_stages (id, quest_id, index_num, title, description, is_completed) VALUES
(1, 1, 1, 'Run the dishwasher', 'Load the dishwasher with any dirty dishes, add detergent and hit start.', false),
(2, 1, 2, 'Unload the dishwasher', 'Empty the dishwasher and put the dishes away.', false),
(3, 2, 1, 'Put the dog outside', 'Let the dog out to do its business around noon.', false),
(4, 2, 2, 'Bring the dog inside', 'Bring the dog back inside after about 30 minutes.', false),
(5, 2, 3, 'Take the dog for a walk', 'Please walk the dog sometime before dinner.', false),
(6, 2, 4, 'Feed the dog', 'Put some food out for the dog after dinner.', false),
(7, 3, 1, 'Tidy the living room', 'Please tidy up the living room.', false),
(8, 4, 1, 'Rake the backyard', 'Rake leaves in the backyard and put them in garbage bags', false),
(9, 5, 1, 'Clear toys off the patio', 'Pick up toys left on the patio and put them away in the shed.', false);
