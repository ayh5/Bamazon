DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;
CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(100) NOT NULL,
   department_name VARCHAR(80) NOT NULL,
   stock_quantity int (10) DEFAULT NULL, 
   price decimal (10,2) NOT NULL,
   
   PRIMARY KEY (item_id)
   );
   
   INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Frisbee', 'Toys', 10.50, 500),
		('Drone', 'Toys', 75.50, 100),
		('Playdough', 'Toys', 6.99, 250),
		('Barbie Dolls', 'Toys', 4.25, 350),
		('Lego', 'Toys', 15.75, 125),
		('Banana', 'Produce', 0.60, 10000),
		('Apple', 'Produce', 1.00, 360),
		('Kiwi', 'Produce', 1.25, 250),
		('TV', 'Electronics', 500.00, 30),
		('Stereo', 'Electronics', 99.99, 50);
   
   SELECT * FROM products WHERE stock_quantity >0 ORDER BY price DESC;
   describe products;