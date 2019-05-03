drop database burger_db;

create database burger_db;

use burger_db;

create table burger(
    id int not null auto_increment,
    burger varchar(50),
    devoured  boolean,
    primary key (id)

);