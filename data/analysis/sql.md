# Structured Query Language (SQL)

My notes from Emma Saunders’ LinkedIn Learning course *SQL: Data Reporting and Analysis*.

## `SELECT`, `FROM`

```
SELECT * FROM actor

SELECT first_name FROM actor

SELECT first_name, last_name FROM actor
```

## `WHERE`, `AND`, `OR`, `BETWEEN`

```
SELECT * FROM actor WHERE first_name = 'PENELOPE'

SELECT * FROM actor WHERE first_name != 'PENELOPE'

SELECT * FROM actor WHERE first_name <> 'PENELOPE'

SELECT * FROM actor WHERE actor_id < 5

SELECT * FROM actor WHERE actor_id >= 5 AND actor_id <= 7

SELECT * FROM actor WHERE actor_id BETWEEN 5 AND 7

SELECT * FROM actor WHERE actor_id <= 5 OR actor_id >= 7
```

## `IN`, `NOT`, `LIKE`, '%', '_'

```
SELECT * FROM actor WHERE first_name IN ('PENELOPE', 'NICK', ED)

SELECT * FROM actor WHERE first_name NOT IN ('PENELOPE', 'NICK', ED)

SELECT * FROM actor WHERE first_name LIKE 'JOHN%'

SELECT * FROM actor WHERE first_name LIKE 'JA_NE'
```

## ORDER BY

```
SELECT * FROM actor WHERE first_name = 'PENELOPE'
ORDER BY last_name ASC
```



## String functions

In SELECT statements

length
concat

