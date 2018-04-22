-- Drops the burgers_db if it exists currently
DROP DATABASE IF EXISTS burgers_db;

-- Creates the burgers_db databas
CREATE DATABASE burgers_db;

-- This uses all of the following code (affects burgers_db)
USE burgers_db;

-- Creates a table called 'burgers' within burgers_db
CREATE TABLE burgers (

    -- Numeric column called 'id', automatically increments
    id INTEGER(11) AUTO_INCREMENT NOT NULL,

    -- A string column called 'burger_name' cannot contain null
    burger_name VARCHAR(255) NOT NULL,

    -- A boolean column called 'devoured' cannot contain null
    devoured BOOLEAN NOT NULL,

    -- Sets id as this table's primary key
    PRIMARY KEY (id)
);