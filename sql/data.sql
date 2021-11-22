-- PREPOPULATING IN ROUTES TABLE

insert into routes (route_name, route_fare) values ('Cape Town - Bellville', 14.50);
insert into routes (route_name, route_fare) values ('Cape Town - Gugulethu', 12.00);
insert into routes (route_name, route_fare) values ('Cape Town - Gugulethu', 8.00);

insert into routes (route_name, route_fare) values ('Sandton - Randburg', 8.50);
insert into routes (route_name, route_fare) values ('Alexandra - Sandton', 8.50);
insert into routes (route_name, route_fare) values ('Sandton - Midrand', 8.50);

insert into routes (route_name, route_fare) values ('Umlazi - Durban Central', 15.00);
insert into routes (route_name, route_fare) values ('Durban Central - Umhlanga Rocks', 17.00);
insert into routes (route_name, route_fare) values ('Durban Central - Umbilo', 7.00);

-- PREPOPULATING IN REGION TABLE

insert into region (region_name) values ('Durban');
insert into region (region_name) values ('Cape Town');
insert into region (region_name) values ('Gauteng');

-- PREPOPULATING IN TAXI TABLE

insert into taxi (reg_number, region_id) values ('CA 123 123', 2);
insert into taxi (reg_number, region_id) values ('GP 123 123', 3);
insert into taxi (reg_number, region_id) values ('NZ 123 123', 1);

-- PREPOPULATING IN TRIP TABLE

insert into trips (routes_id, taxi_id) values (1, 3);
insert into trips (routes_id, taxi_id) values (2, 1);
insert into trips (routes_id, taxi_id) values (3, 2);