;DROP SCHEMA XIST_SUB;

CREATE SCHEMA XIST_SUB;

SET SCHEMA XIST_SUB;

CREATE COLUMN TABLE "config" (
"Name" NVARCHAR(24),
"Value" NVARCHAR(24),
PRIMARY KEY ("Name") );

insert into "XIST_SUB"."config" values('CustomerName','Unknown, Inc.');
insert into "XIST_SUB"."config" values('CustomerNumber','0000');
insert into "XIST_SUB"."config" values('Currency','USD');
insert into "XIST_SUB"."config" values('Loyalty','False');

CREATE COLUMN TABLE "orders" (
"orderId" INTEGER,
"item" NVARCHAR(32),
"origin" NVARCHAR(2),
"quantity" INTEGER,
"priceUSD" REAL,
"ordered" TIMESTAMP NOT NULL,
PRIMARY KEY ("orderId") );

insert into "XIST_SUB"."orders" values(1,'ITEM01','GA',1,9.99,'2020-01-01 12:01:00');
insert into "XIST_SUB"."orders" values(2,'ITEM02','NY',3,1.00,'2020-01-02 12:01:00');
insert into "XIST_SUB"."orders" values(3,'ITEM03','ID',2,0.13,'2020-01-03 12:01:00');
