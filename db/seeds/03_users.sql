-- Insert seed values into users table

INSERT INTO users (id, family_id, first_name, last_name, email, password_hash, type_id, invited_by) VALUES
(1, 1, 'Devin', 'King', 'devin@king.com', '$2b$10$j1hKP6zEY0bgCSXb4M/if.T6XnvdCb0yiZGZ5WsZzd5WENV437MVe', 1, null),
(2, 1, 'Ayana', 'King', 'ayana@king.com', '$2b$10$j1hKP6zEY0bgCSXb4M/if.T6XnvdCb0yiZGZ5WsZzd5WENV437MVe', 1, 1),
(3, 1, 'Brent', 'King', 'brent@king.com', '$2b$10$j1hKP6zEY0bgCSXb4M/if.T6XnvdCb0yiZGZ5WsZzd5WENV437MVe', 2, 1),
(4, 1, 'Lonny', 'King', 'lonny@king.com', '$2b$10$j1hKP6zEY0bgCSXb4M/if.T6XnvdCb0yiZGZ5WsZzd5WENV437MVe', 2, 1),
(5, 1, 'Griffin', 'King', 'griffin@king.com', '$2b$10$j1hKP6zEY0bgCSXb4M/if.T6XnvdCb0yiZGZ5WsZzd5WENV437MVe', 2, 1);
