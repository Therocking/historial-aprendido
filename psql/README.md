# PostgreSQL
Aquí están las anotaciones de lo que voy aprendiendo de **PostgreSQL**, y ejemplos propios para tener una referencia.[Info sacada de la página de PostgreSQL tutorial](https://www.postgresqltutorial.com/postgresql-tutorial).

## Todo lo aprendido
[SELECT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/).
[Alias](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-column-alias/).
[DISTINCT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select-distinct/).
[WHERE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/).
[LIMIT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-limit/).
[FETCH](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-fetch/).
[IN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-in/).
[BETWEEN](https://www.postgresqltutorial.comrpostgresql-tutorial/postgresql-between/).
[LIKE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-like/).
[Joins](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/).
[Table aliases](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-alias/).
[CROSS JOIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-cross-join/).

## Comandos CRUD

```PostgreSQL
CREATE DATABASE nombre_de_la_base_de_datos;
```

```PostgreSQL
CREATE TABLE nombre_de_la_tabla (
    columna1 tipo_de_dato,
    columna2 tipo_de_dato,
    ...
);
```

```PostgreSQL
INSERT INTO nombre_de_la_tabla (columna1, columna2, ...) VALUES (valor1, valor2, ...);
```

```PostgreSQL
SELECT columna1, columna2 FROM nombre_de_la_tabla WHERE condición;
```

```PostgreSQL
UPDATE nombre_de_la_tabla SET columna1 = nuevo_valor WHERE condición;
```

```PostgreSQL
DELETE FROM nombre_de_la_tabla WHERE condición;
```

```PostgreSQL
CREATE INDEX nombre_del_indice ON nombre_de_la_tabla (columna);
```

## Orden se ejecución de querys
![orden de ejecución sql](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/PostgreSQL-GROUP-BY-1.png)

## Conceptos de SQL importantes

### Relación de tablas 1 - n
### Relación de tablas n - n
