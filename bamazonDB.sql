drop database if exists bamazonDB;
create database bamazonDB;
use bamazonDB;

create table products(
	id int auto_increment not null,
	itemID int not null,
    productName varchar(50) not null,
    departmentName varchar(50) not null,
    price double(15,2) not null,
    stockQuantity int not null,
    primary key (id)
);

insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(1, "C63s AMG", "Automotive", 80000, 3);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(2, "AMG GTR", "Automotive", 200000, 6);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(3, "McLaren 720s", "Automotive", 350000, 2);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(4, "McLaren 570s", "Automotive", 200000, 10);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(5, "Toothpaste", "Personal Care", 2.50, 103);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(6, "Laptop", "Electronics", 1000, 50);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(7, "Paintball Gun", "Outdoors", 80000, 30);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(8, "Shoes", "Footwear", 80, 60);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(9, "Shirt", "Clothes", 20, 40);
 
 insert into products(
	itemID,
	productName,
	departmentName, 
	price, 
	stockQuantity
 ) values(10, "Red Diamond Necklace", "Jewelry", 1000000, 1);