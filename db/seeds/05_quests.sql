-- Insert seed values into quests table

INSERT INTO quests (id, family_id, title, description, base_reward, assigned_to, created_by, updated_at, updated_by) VALUES
(1, 1, 'Do the dishes', 'The kitchen is plagued by dirty dishes! A brave and noble soul is needed to cleanse the room of this blight!', 100, null, 1, null, null),
(2, 1, 'Take care of the dog', 'A mighty beast dwells in our lands! When not properly cared for, it becomes both mischievous and adorable, disrupting the lives of the townsfolk. A hero is needed to keep the beast at bay before the locals are overwhelmed by sad eyes and doggy drool!', 100, 3, 2, null, null),
(3, 1, 'Tidy the living room', 'A band of brigands have rampaged across the living room and left choas in their wake. Help undo this disaster!', 100, 5, 1, null, null),
(4, 1, 'Rake the backyard', 'A curse has been cast upon the wilderness! Upon the first sign of winter, arboreal dead will rise and destroy the land! The local druids require help to remove this fallen foliage before it is too late!', 100, 4, 1, null, null),
(5, 1, 'Clean up toys', 'Dangerous relics have been scattered far and wide! An old wizard requests that a courageous adventurer track down these arcane devices before their powerful magics bring harm to unsuspecting bystanders.', 100, 4, 1, null, null);
