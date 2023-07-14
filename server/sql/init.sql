-- Создание базы данных
CREATE DATABASE nodeboard_db;

-- Подключение к базе данных
\c nodeboard_db

-- Создание таблицы постов
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    image_url VARCHAR(64) DEFAULT '',
    time_stamp TIMESTAMPTZ DEFAULT NOW()
);

-- Создание таблицы ролей
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL
);

-- Добавление ролей
INSERT INTO role (name, id) VALUES ('superuser', 1);
INSERT INTO role (name, id) VALUES ('admin', 2);
INSERT INTO role (name, id) VALUES ('moderator', 3);

-- Создание таблицы пользователей
CREATE TABLE user_account (
    id SERIAL PRIMARY KEY,
    login VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role_id INTEGER REFERENCES role(id)
);




