# Notas


## Contenedores

- Crear un contenedor de una db: docker run -d --name {contaner-name} -p {os-port:dbport} -e MYSQL_ROOT_PASSWORD={pw} -v /opt/data:/var/lib/mysql {db-img}
