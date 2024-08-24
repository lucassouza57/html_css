create table if not exists curso(
nome varchar(20) not null unique,
descrissao text ,
carga int unsigned,
totaulas int unsigned,
ano year default '2024'
) default charset=utf8mb4; 

alter table curso
add column idcurso int first;

alter table curso
add primary key (idcurso);