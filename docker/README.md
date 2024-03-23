# Notas

## Entrar en el contenedor
```docker
docker exec -it {container_name} bash
```

## Envs
Para Pasar variables de entorno al contenedor se utiliza el flag `-e` y luego el nombre de la variable que utilizará el contenedor. Ejemplo:
```docker
docker run -e PORT=8767 imagen
```

## Crear volumenes
```docker
docker volumen create {volumen-name}
```

## Crear red
```docker
docker network create {network-name}
```

## Remover imagenes
### Remover la imagenes que no están en uso
```docker
docker image prune

    "O para remover todas"

docker image prune -a
```

## Ejercicios

```docker
<!-- ejecutar una db postgres -->

docker container run \
--name db \
-dp 5432:5432 \
-e POSTGRES_PASSWORD=password \
-v world-db:/var/lib/postgresql/data \ <!-- enlaza los datos del contenedor a un volumen -->
postgres:16.2-alpine3.19
```

```docker
<!-- levantar una db mariadb, levantar la imagen phpmyadmin y administrar la db y conectalas a una red -->

docker container run \
-dp 3306:3306 \
--name world-db \
-e MARIADB_USER=user \
-e MARIADB_PASSWORD=1234 \
-e MARIADB_ROOT_PASSWORD=root \
-e MARIADB_DATABASE=world-db \
-v world-db:/var/lib/mysql \ <!-- enlaza los datos del contenedor a un volumen -->
--network world-app \ <!-- enlaza el contenedor a una red -->
mariadb:jammy

docker container run \
-dp 8080:80 \
--name pma \
-e PMA_ARBITRARY=1 \
--network world-app \ <!-- enlaza el contenedor a una red -->
phpmyadmin:5.2.0-apache
```

```docker 
 <!-- Ejecutar una db sql server y utilizarla en un proyecto de c# -->

docker run \
-e "ACCEPT_EULA=Y" \
-e "MSSQL_SA_PASSWORD=password" \
-e "MSSQL_PID=Evaluation" \
-dp 1433:1433 \
--name sqlserver1 \
--hostname sqlserver1 \
mcr.microsoft.com/mssql/server:2022-CU10-ubuntu-22.04
```
