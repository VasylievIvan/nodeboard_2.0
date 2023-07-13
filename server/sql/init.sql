-- Создание базы данных
CREATE DATABASE nodeboard_db;

-- Подключение к базе данных
\c nodeboard_db

-- Создание таблицы
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    image_url VARCHAR(64) DEFAULT '',
    time_stamp TIMESTAMPTZ DEFAULT NOW()
);
