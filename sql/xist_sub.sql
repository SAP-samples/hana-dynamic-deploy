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

