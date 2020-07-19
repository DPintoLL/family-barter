-- Insert seed values into prizes table

INSERT INTO prizes (id, family_id, name, description, cost, icon_url, icon_color, is_shared, created_by) VALUES
(1, 1, 'Chocolate Bar', 'Your favourite chocolate bar.', 150, 'ICON_URL_HERE', '#FFFFFF', true, 1),
(2, 1, 'Can of Pop', 'One can of your favourite soft drink.', 150, 'ICON_URL_HERE', '#FFFFFF', true, 1),
(3, 1, 'Bottle of Pop', 'One bottle of your favourite soft drink.', 200, 'ICON_URL_HERE', '#FFFFFF', true, 1),
(4, 1, 'Ice Cream', 'Redeemable for a bowl of ice cream for dessert.', 200, 'ICON_URL_HERE', '#FFFFFF', true, 1),
(5, 1, 'Game Time', 'Redeemable for an extra hour of video games in the evening.', 500, 'ICON_URL_HERE', '#FFFFFF', true, 1),
(6, 1, 'Movie', 'Redeemable for one regular-priced movie ticket at the local theatre.', 1500, 'ICON_URL_HERE', '#FFFFFF', true, 1),
(7, 1, 'Pizza Delivery', 'Order a large pizza to eat for dinner (instead of that gross stuff your parents make).', 2000, 'ICON_URL_HERE', '#FFFFFF', true, 1),
(8, 1, 'Video Game', 'That video game that you have been looking forward to.', 8000, 'ICON_URL_HERE', '#FFFFFF', false, 1),
(9, 1, 'Fancy Shoes', 'That pair of shoes that you are dying to buy (which you really dont "need" --Mom)', 10000, 'ICON_URL_HERE', '#FFFFFF', false, 2),
(10, 1, 'Mountain Bike', 'That new bike that you have had your eye on.', 20000, 'ICON_URL_HERE', '#FFFFFF', false, 1),
(11, 1, 'Graphics Card', 'A new graphics card for your computer, because frames win games!', 100000, 'ICON_URL_HERE', '#FFFFFF', false, 2);