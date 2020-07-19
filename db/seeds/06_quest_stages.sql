-- Insert seed values into quest_stages table

INSERT INTO quest_stages (id, quest_id, index_num, title, description, is_completed) VALUES
(1, 1, 'Run the dishwasher', 'Load the dishwasher with any dirty dishes, add detergent and hit start.', false),
(2, 1, 'Unload the dishwasher', 'Empty the dishwasher and put the dishes away.', false),
(3, 2, 'Put the dog outside', 'Let the dog out to do its business around noon.', true),
(4, 2, 'Bring the dog inside', 'Bring the dog back inside after about 30 minutes.', true),
(5, 2, 'Take the dog for a walk', 'Please walk the dog sometime before dinner.', false),
(6, 2, 'Feed the dog', 'Put some food out for the dog after dinner.', false),
(7, 3, 'Tidy the living room', 'Please tidy up the living room.', true);
(8, 4, 'Rake the backyard', 'Rake leaves in the backyard and put them in garbage bags', true),
(9, 5, 'Clear toys off the patio', 'Pick up toys left on the patio and put them away in the shed.', false);
