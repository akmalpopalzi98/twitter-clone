INSERT INTO users (name, handle, email, cognito_id)
VALUES 
('Alice Smith', 'alice', 'alice@example.com', '123'),
('Bob Johnson', 'bob', 'bob@example.com', '456'),
('Charlie Brown', 'charlie', 'charlie@example.com', '789');


INSERT INTO activities (user_id, message, expires_at)
VALUES 
(1, 'Hey there', current_timestamp + interval '10 day'),
(2,'Wow this is good!',current_timestamp + interval '10 day'),
(3,'lols',current_timestamp + interval '10 day');


INSERT INTO replies (activity_id,user_id,message)
VALUES
(1,2,'Heyyyyy, its been too long'),
(1,3,'whahhhstt!!!');