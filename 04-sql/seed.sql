INSERT INTO users (name, email) VALUES 
('Ana', 'ana@exemplo.com'),
('Bruno', 'bruno@exemplo.com'),
('Carla', 'carla@exemplo.com'),
('Diego', 'diego@exemplo.com'),
('Elisa', 'elisa@exemplo.com');

INSERT INTO items (name, price, available, wear) VALUES 
('AK-47 | Redline', 120, TRUE, 'FT'),
('AWP | Asiimov', 430, FALSE, 'FT'),
('M4A4 | Howl', 5200, TRUE, 'MW'),
('Glock-18 | Fade', 900, TRUE, 'FN'),
('USP-S | Kill Confirmed', 350, TRUE, 'MW'),
('Desert Eagle | Blaze', 1800, FALSE, 'FN'),
('AK-47 | Vulcan', 750, TRUE, 'FT'),
('M4A1-S | Printstream', 640, TRUE, 'MW'),
('Karambit | Doppler', 9500, TRUE, 'FN'),
('P250 | Sand Dune', 3, TRUE, 'BS');

INSERT INTO orders (user_id) VALUES 
(1), (2), (1), (3);

INSERT INTO order_items (order_id, item_id, unit_price) VALUES 
(1, 1, 120), 
(1, 5, 350),
(2, 2, 430),
(3, 4, 900),
(4, 1, 120);