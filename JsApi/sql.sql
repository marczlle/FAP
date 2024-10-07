create database mydb;
use mydb;

create table personagens(
id int primary key,
name varchar(100) not null
);

insert into personagens (id, name) values (4, "tsukshima");

select * from personagens;
select * from personagens where id = 1;

update personagens set name = "atsushi nakajima" where id = 3;

delete from personagens where id = 4;

ALTER TABLE personagens MODIFY id INT AUTO_INCREMENT;