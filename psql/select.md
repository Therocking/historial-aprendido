## SELECT
El comando **SELECT** se utiliza para obtener data de tablas(columnas, filas). Este comando es ``case-insensitive``, lo que significa que se puede escribir en minúsculas, mayúsculas, etc. Este comando se utiliza con el comando **FROM** que indica en donde buscará la data, este comando, **SELECT**, tiene varios para metros que ayudan a buscar la data de forma más precisa:

### *
Este indica que se quiere traer todas las columnas de una tabla.

```PostgreSQL
SELECT * FROM accounts;

 user_id | username | password | email | created_on | last_login 
---------+----------+----------+-------+------------+------------
```

### Nombre de la columna
Puedes llamar una columna llamandola con su nombre.
```PostgreSQL
SELECT username FROM accounts;

username 
---------
```

### ,
Este se utiliza para traer varias columnas.

```PostgreSQL
SELECT user_id, username FROM accounts;

 user_id | username
---------+----------
```

### Utilizando expresiones

```PostgreSQL
SELECT user_id || " " || username FROM accounts;
```

## alias
Los alias se utilizan para llamar columnas con un nombre temporalmente diferente utilizando el parámetro **AS**:

```PostgreSQL
SELECT username AS names FROM accounts;

 names 
-------
```

Esto es útil si se quiere que el nombre de una columna se sintaticamente significativa.

Utilizando el siguiente comando la columna no tiene un nombre significativo **?column?**:
```PostgreSQL
SELECT username || " " || last_name FROM accounts;
```

![ej](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/PostgreSQL-Alias-Example.png)

En este caso se puede utilizar un alias:

```PostgreSQL
SELECT
    username || ' ' || last_name AS full_name
FROM
    accounts;
```

![ej](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/PostgreSQL-Alias-column-alias-example.png)

Támbien se puede nombrar un alias sin utilizar las dobles comillas. Si el nombre del alias tiene espacios se deben de utilizar comillas doble **"**:

```PostgreSQL
SELECT
    username || ' ' || last_name "full name"
FROM
    accounts;
```

![ej](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/PostgreSQL-Column-Alias-with-space.png)

## ORDER BY
Este se utiliza para ordenar las columnas, tiene cuatro opciones:

> ASC - Ordena de arriba hacia abajo.
  DESC - Ordena de abajo hacia arriba.
  NULLS FIRST - Ordena primero los filas con valores nulos y luego las no nulas.
  NULLS LAST - Ordena primero las filas con valores no nulos y luego las nulas.

Por defecto el **ORDER BY** utiliza la opción **ASC**.

```PostgreSQL
SELECT username FROM users order by username {opción}

// ejemplo
SELECT username FROM users order by username ASC;
```

## DISTINCT
Se utiliza para traer filas que sean diferentes:

```PostgreSQL
SELECT DISTINCT username FROM users ORDER BY username;
```

En el ejemplo, se trae las filas de username con valores diferentes. Si se utiliza para más de una fila, el **DISTINCT** el evaluará los valores de las dos filas combinas:

```PostgreSQL
SELECT DISTINCT username, nick_name FROM users ORDER BY username, nick_name;

// evaluará así
username | nick_name
pedro		luis
alvaro		alvaro
alvaro 		alvaro // Esta es igual que el anterior asi que no se muestra
ruiz		ruiz
```

Si lo que se quiere hacer es evaluar una fila y que te traiga otra, pero sin que ser evaluda se usa **DISTINCT ON**:

```PostgreSQL
SELECT DISTINCT ON (username), nick_name FROM users ORDER BY username;
```

Esto evaluará la fila username y traerá las que sean diferentes y su nick_name, la fila que se va a evaluar tiene que coinsidir con la primera que está en el **ORDER BY**.
