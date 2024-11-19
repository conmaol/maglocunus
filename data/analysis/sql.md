# Structured Query Language (SQL)

My notes from Emma Saunders’ LinkedIn Learning course *SQL: Data Reporting and Analysis*.

## Use SQL to report data

### `select ... from`

```
SELECT * FROM actor

SELECT first_name FROM actor

SELECT first_name, last_name FROM actor
```

###  `select ... from ... where`

#### `=`, `!=`, `<>`

```
SELECT * FROM actor WHERE first_name = 'PENELOPE'

SELECT * FROM actor WHERE first_name != 'PENELOPE'

SELECT * FROM actor WHERE first_name <> 'PENELOPE'
```

#### `<`, `>`, `<=`, `>=`, `between ... and`

```
SELECT * FROM actor WHERE actor_id < 5

SELECT * FROM actor WHERE actor_id >= 5

SELECT * FROM actor WHERE actor_id BETWEEN 5 AND 7
```

Notes:
- `between ... and` is inclusive

#### `and`, `or`

```
SELECT * FROM actor WHERE actor_id >= 5 AND actor_id <= 7

SELECT * FROM actor WHERE actor_id <= 5 OR actor_id >= 7
```

Notes:
- The boolean operators `and` and `or` are left associative.

#### `(not) in`

```
SELECT * FROM actor WHERE first_name IN ('PENELOPE', 'NICK', 'ED')

SELECT * FROM actor WHERE first_name NOT IN ('PENELOPE', 'NICK', 'ED')
```

#### `like`

```
SELECT * FROM actor WHERE first_name LIKE 'JOHN%'

SELECT * FROM actor WHERE first_name LIKE 'JA_NE'
```

Notes:
- The wildcard `%` matches zero or more characters.
- The wldcard `_` matches exactly one character.
- `like` is case insensitive.
- Wildcards cannot be used within `in` lists. 

#### `order by`

```
SELECT * FROM actor WHERE first_name = 'PENELOPE'
ORDER BY last_name ASC

SELECT * FROM actor WHERE first_name = 'PENELOPE'
ORDER BY actor_id DESC
```

### String functions

#### `length`

```
SELECT LENGTH(first_name) FROM actor

SELECT * FROM actor
WHERE LENGTH(first_name) > 10

SELECT * FROM actor
ORDER BY LENGTH(last_name)
```

#### `concat` 

```
SELECT CONCAT(first_name, ' ', last_name) FROM actor

SELECT * FROM actor
WHERE LENGTH(CONCAT(first_name, ' ', last_name)) > 15

SELECT * FROM actor
ORDER BY LENGTH(CONCAT(first_name, ' ', last_name))
```

#### `lower`, `upper`

```
SELECT LOWER(first_name) FROM actor

SELECT * FROM actor
WHERE UPPER(first_name) = 'PENELOPE'

SELECT * FROM actor
ORDER BY LOWER(first_name)
```

Notes:
- `initcap` will make the first character uppercase, and the rest lowercase (system-dependent).

#### `left`, `right`

left = the n characters at the start of the string

right = the n characters at the end of the string


```
SELECT CONCAT(LEFT(first_name,1), RIGHT(first_name, LENGTH(first_name)-1)) FROM ACTOR
```






## Group your SQL results







