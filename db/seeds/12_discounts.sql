-- Insert seed values into discounts table

INSERT INTO discounts (prize_id, percentage, start_time, end_time, created_at, created_by, updated_at, updated_by) VALUES
(5, 10, '2020-07-14 13:45:32', '2020-07-31 23:59:59', '2020-07-14 13:45:32', 1, null, null),
(1, 20, '2020-07-20 00:00:00', '2020-07-26 23:59:59', '2020-07-15 17:00:00', 2, '2020-07-16 09:00:00', 2);