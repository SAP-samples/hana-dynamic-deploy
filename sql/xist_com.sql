;DROP SCHEMA XIST_COM;

CREATE SCHEMA XIST_COM;

SET SCHEMA XIST_COM;

CREATE COLUMN TABLE "states" (
"Code" NVARCHAR(2),
"Abbrev" NVARCHAR(6),
"Name" NVARCHAR(24),
PRIMARY KEY ("Code") );

insert into "states" ("Name","Abbrev","Code")values('Alabama','Ala.','AL');
insert into "states" ("Name","Abbrev","Code")values('Alaska','Alaska','AK');
insert into "states" ("Name","Abbrev","Code")values('Arizona','Ariz.','AZ');
insert into "states" ("Name","Abbrev","Code")values('Arkansas','Ark.','AR');
insert into "states" ("Name","Abbrev","Code")values('California','Calif.','CA');
insert into "states" ("Name","Abbrev","Code")values('Colorado','Colo.','CO');
insert into "states" ("Name","Abbrev","Code")values('Connecticut','Conn.','CT');
insert into "states" ("Name","Abbrev","Code")values('Delaware','Del.','DE');
insert into "states" ("Name","Abbrev","Code")values('District of Columbia','D.C.','DC');
insert into "states" ("Name","Abbrev","Code")values('Florida','Fla.','FL');
insert into "states" ("Name","Abbrev","Code")values('Georgia','Ga.','GA');
insert into "states" ("Name","Abbrev","Code")values('Hawaii','Hawaii','HI');
insert into "states" ("Name","Abbrev","Code")values('Idaho','Idaho','ID');
insert into "states" ("Name","Abbrev","Code")values('Illinois','Ill.','IL');
insert into "states" ("Name","Abbrev","Code")values('Indiana','Ind.','IN');
insert into "states" ("Name","Abbrev","Code")values('Iowa','Iowa','IA');
insert into "states" ("Name","Abbrev","Code")values('Kansas','Kans.','KS');
insert into "states" ("Name","Abbrev","Code")values('Kentucky','Ky.','KY');
insert into "states" ("Name","Abbrev","Code")values('Louisiana','La.','LA');
insert into "states" ("Name","Abbrev","Code")values('Maine','Maine','ME');
insert into "states" ("Name","Abbrev","Code")values('Maryland','Md.','MD');
insert into "states" ("Name","Abbrev","Code")values('Massachusetts','Mass.','MA');
insert into "states" ("Name","Abbrev","Code")values('Michigan','Mich.','MI');
insert into "states" ("Name","Abbrev","Code")values('Minnesota','Minn.','MN');
insert into "states" ("Name","Abbrev","Code")values('Mississippi','Miss.','MS');
insert into "states" ("Name","Abbrev","Code")values('Missouri','Mo.','MO');
insert into "states" ("Name","Abbrev","Code")values('Montana','Mont.','MT');
insert into "states" ("Name","Abbrev","Code")values('Nebraska','Nebr.','NE');
insert into "states" ("Name","Abbrev","Code")values('Nevada','Nev.','NV');
insert into "states" ("Name","Abbrev","Code")values('New Hampshire','N.H.','NH');
insert into "states" ("Name","Abbrev","Code")values('New Jersey','N.J.','NJ');
insert into "states" ("Name","Abbrev","Code")values('New Mexico','N.M.','NM');
insert into "states" ("Name","Abbrev","Code")values('New York','N.Y.','NY');
insert into "states" ("Name","Abbrev","Code")values('North Carolina','N.C.','NC');
insert into "states" ("Name","Abbrev","Code")values('North Dakota','N.D.','ND');
insert into "states" ("Name","Abbrev","Code")values('Ohio','Ohio','OH');
insert into "states" ("Name","Abbrev","Code")values('Oklahoma','Okla.','OK');
insert into "states" ("Name","Abbrev","Code")values('Oregon','Ore.','OR');
insert into "states" ("Name","Abbrev","Code")values('Pennsylvania','Pa.','PA');
insert into "states" ("Name","Abbrev","Code")values('Rhode Island','R.I.','RI');
insert into "states" ("Name","Abbrev","Code")values('South Carolina','S.C.','SC');
insert into "states" ("Name","Abbrev","Code")values('South Dakota','S.D.','SD');
insert into "states" ("Name","Abbrev","Code")values('Tennessee','Tenn.','TN');
insert into "states" ("Name","Abbrev","Code")values('Texas','Tex.','TX');
insert into "states" ("Name","Abbrev","Code")values('Utah','Utah','UT');
insert into "states" ("Name","Abbrev","Code")values('Vermont','Vt.','VT');
insert into "states" ("Name","Abbrev","Code")values('Virginia','Va.','VA');
insert into "states" ("Name","Abbrev","Code")values('Washington','Wash.','WA');
insert into "states" ("Name","Abbrev","Code")values('West Virginia','W.Va.','WV');
insert into "states" ("Name","Abbrev","Code")values('Wisconsin','Wis.','WI');
insert into "states" ("Name","Abbrev","Code")values('Wyoming','Wyo.','WY');


CREATE COLUMN TABLE "currencies" (
"Code" NVARCHAR(3),
"Name" NVARCHAR(24),
"UperUSD" REAL,
"USDperU" REAL,
PRIMARY KEY ("Code") );

insert into "XIST_COM"."currencies" values('USD','US Dollar',1,1);
insert into "XIST_COM"."currencies" values('EUR','Euro',0.847710211,1.179648407);
insert into "XIST_COM"."currencies" values('GBP','British Pound',0.766594681,1.304470308);
insert into "XIST_COM"."currencies" values('INR','Indian Rupee',73.73544923,0.013561998);
insert into "XIST_COM"."currencies" values('JPY','Japanese Yen',105.953149,0.009438134);
insert into "XIST_COM"."currencies" values('VES','Venezuelan Bolívar',336395.3181,2.9727E-06);
insert into "XIST_COM"."currencies" values('GLD','Gold Oz',0.00051889,1927.17);
insert into "XIST_COM"."currencies" values('SLV','Silver Oz',0.0373413,26.78);

