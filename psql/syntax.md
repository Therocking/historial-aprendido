# Sintaxis de las queries sql

## SELECT
```PostgreSQL
SELECT column_name FROM table_name;
```

## Column Aliases
```PostgreSQL
SELECT column_name as column_alias FROM table_name;
```

- Or without **AS**
```PostgreSQL
SELECT column_name column_alias FROM table_name;
```

## ORDER BY
```PostgreSQL
SELECT column_name FROM table_name ORDER BY sort_expression [ ASC | DESC ];
```

## SELECT DISTINCT
```PostgreSQL
- SELECT DISTINCT column_name FROM table_name;

- SELECT DISTINCT column_name, column_name2 FROM table_name;

- SELECT DISTINCT ON ( column_name ) column_alias FROM table_name;

- SELECT DISTINCT ON ( column_name ) column_alias, column_name2 FROM table_name;
```

## WHERE

### WHERE Operators
| Operators | Descrition |
| --------- | ---------- |
| =	|	Equal |
| >	|	Greaten than |
| <	|	Less than |
| >=	|	Greaten or equal |
| <=	|	Less than or equal |
| <> or !=	|	Not equal |
| AND	|	Logical operator AND |
| OR	|	Logical operator OR |
| IN	|	Return true if a value matches any value in a list |
| BETWEEN	|	Return true if a value is between a range of values |
| LIKE	|	Return true if a value matches a pattern |
| IS NULL |	Return true if a value is NULL |
| NOT	|	Negate the result of other operators |

```PostgreSQL
SELECT column_name FROM table_name WHERE condition;
```

## OFFSET & FETCH
- OFFSET [ row | rows ]
- FETCH [ first | next ] { row_count } [ row | rows ] ONLY

```PostgreSQL
SELECT column_name FROM table_name OFFSET [ row | rows ] FETCH [ first | next ] { row_count } [ row | rows ] ONLY;
```

## JOIN
Se utiliza para relazionar o unir dos tablas. Si las tablas tiene columnas que se llaman igual se utiliza el parámetro **USING** con el nombre de la columna o se utiliza un alias para la tabla.

### INNER JOIN

// Une sólo las columnas que sean iguales
```PostgreSQL
SELECT colunm_a other_colunm_a, colunm_b, other_colunm_b FROM colunm_a INNER JOIN colunm_b ON other_colunm_a = other_colunm_b;
```

### RIGHT JOIN & RIGHT OUTER JOIN
```PostgreSQL
SELECT colunm_a other_colunm_a, colunm_b, other_colunm_b FROM colunm_a RIGHT JOIN colunm_b ON other_colunm_a = other_colunm_b;
```

- OUTER

// Muestra las columnas que tengan null, que no sean igual.
```PostgreSQL
SELECT colunm_a other_colunm_a, colunm_b, other_colunm_b FROM colunm_a INNER JOIN colunm_b ON other_colunm_a = other_colunm_b WHERE other_colunm_a IS NULL;
```

### LEFT JOIN & LEFT OUTER JOIN
```PostgreSQL
SELECT colunm_a other_colunm_a, colunm_b, other_colunm_b FROM colunm_a LEFT JOIN colunm_b ON other_colunm_a = other_colunm_b;
```

- OUTER

// Muestra las columnas que tengan null, que no sean igual.
```PostgreSQL
SELECT colunm_a other_colunm_a, colunm_b, other_colunm_b FROM colunm_a INNER JOIN colunm_b ON other_colunm_a = other_colunm_b WHERE other_colunm_b IS NULL;
```

### FULL JOIN & FULL OUTER JOIN
```PostgreSQL
SELECT colunm_a other_colunm_a, colunm_b, other_colunm_b FROM colunm_a FULL JOIN colunm_b ON other_colunm_a = other_colunm_b;
```

- OUTER

// Muestra las columnas que tengan null, que no sean igual.
```PostgreSQL
SELECT colunm_a other_colunm_a, colunm_b, other_colunm_b FROM colunm_a INNER JOIN colunm_b ON other_colunm_a = other_colunm_b WHERE other_colunm_b IS NULL OR other_colunm_a IS NULL;
```

### Self-join
Se utiliza para relazionar info dentro de una misma tabla utilizando un alias, se utiliza con cualquier parámetro **JOIN**.

```PostgreSQL

// Se relazionan elementos dentro de la misma tabla employee
SELECT e.first_name || ' ' || e.last)name employee,
	m.first_name || ' ' || e.last_name manager
FROM employee e 
INNER JOIN employee m ON m.employee_id = e.manager_id;
```

### CROSS JOIN
```PostgreSQL
SELECT column_name FROM table_name CROSS JOIN table_name_b;
```

### 
