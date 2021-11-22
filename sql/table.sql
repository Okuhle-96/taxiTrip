drop table if exists routes CASCADE;
create table routes (
    id serial primary key,
    route_name text not null,
    route_fare decimal (10,2) not null
);

drop table if exists region CASCADE;
create table region (
    id serial primary key,
    region_name text not null
);

drop table if exists taxi CASCADE;
create table taxi (
    id serial primary key,
    reg_number text not null,
    region_id int,
    foreign key (region_id) references region(id)
);

drop table if exists trips CASCADE;
create table trips (
    id serial primary key,
	routes_id int,
	foreign key (routes_id) references routes(id),
    taxi_id int,
	foreign key (taxi_id) references taxi(id)
);