INSERT INTO `user_details` (`u_id`, `u_role`, `u_contact_number`, `u_email`, `u_name`, `u_password`, `u_status`) VALUES
(1, 'ROLE_USER', '7896523611', 'sobhon@gmail.com', 'Sobhon Sai', '$2a$10$eCCFGCLfuugOPWgxFAMNXOGYUs1dGPycF7eSJJE3wz1ze01/oBKW.', '1'),
(2, 'ROLE_USER', '8016969280', 'sudip@gmail.com', 'sudip pain', '$2a$10$JoY7FZDBD3KOl7r7afWzuO.CotQbKoUf24mhtqSSqr/Aw5.VmNnlG', '1'),
(3, 'ROLE_USER', '7748965213', 'vikram@gmail.com', 'Vikram Das', '$2a$10$BpmIOqGcqN96rvVJBhkJZeGSs1GDPdckAvIGDIq88QNFqiF9WkOPC', '1'),
(6, 'ROLE_USER', '9865741235', 'sourav@gmail.com', 'Sourav Ghosh', '$2a$10$wDL9m8Uvd5SIdPZaw7YYF.xwwIqgrrzPdgjUmW8dxsyMMBvtN5fSq', '1'),
(7, 'ROLE_ADMIN', '7852146398', 'admin@gmail.com', 'Admin', '$2a$10$D56HM1j3hwjS0dyVBADGx.OTogJOsgXOKoMTiTbDwIjmSzfe4CHVC', '1'),
(20, 'ROLE_USER', '6723124567', 'hudson@gmail.com', 'Hadson Pasko', '$2a$10$XybeP6B0BmZWRzuvR5YiH.nmUNF6uSSTlrUL7ciJ1QHvRWtdanSwW', '1');


INSERT INTO `inventory` (`id`, `price`, `product`, `quantity`, `user_email`) VALUES
(23, 300, 'Led Tv', 3, 'sudip@gmail.com'),
(24, 200, 'Fridge', 5, 'sudip@gmail.com'),
(25, 400, 'Air Conditioner', 15, 'sudip@gmail.com'),
(26, 10, 'Fan', 4, 'sudip@gmail.com'),
(27, 10, 'Fan', 4, 'sobhon@gmail.com'),
(28, 250, 'Led Tv', 1, 'sobhon@gmail.com'),
(29, 250, 'Air Conditioner', 1, 'sobhon@gmail.com'),
(30, 350, 'Air Conditioner', 2, 'vikram@gmail.com'),
(31, 150, 'Micro Oven', 2, 'vikram@gmail.com'),
(32, 550, 'Laptop', 1, 'vikram@gmail.com'),
(33, 450, 'Laptop', 2, 'sourav@gmail.com'),
(34, 10, 'Fan', 8, 'sourav@gmail.com'),
(35, 355, 'Air Conditioner', 2, 'hudson@gmail.com'),
(36, 100, 'Fridge', 4, 'hudson@gmail.com');