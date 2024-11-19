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

```
SELECT LEFT(first_name,3) FROM actor

SELECT * FROM actor
WHERE RIGHT(last_name,1) = 'E'

SELECT * FROM actor
ORDER BY RIGHT(last_name,4)

SELECT CONCAT(LEFT(first_name,1), RIGHT(first_name, LENGTH(first_name)-1))
FROM ACTOR
```

Notes:
- `left(string,n)` returns the first n characters of the string
- `right(string,n)` returns the last n characters of the string

#### `substring`

```
SELECT SUBSTRING(first_name,1,3) FROM actor

SELECT SUBSTRING(first_name,4) FROM actor

SELECT SUBSTRING(first_name,-4) FROM actor

SELECT CONCAT(SUBSTRING(first_name,1,1), LOWER(SUBSTRING(first_name,2))) FROM actor
```

Notes:
- `substring(string,n,m)` returns the first m characters in string starting at position n (non-zero indexing).
- `substring(string,n)` returns the end of string starting from position n.
- `substring(string,-n)` returns ??
- Do these all work in Postrgres?

#### `trim`

```
SELECT TRIM(first_name) FROM actor

TRIM(LEADING 'A ' FROM description) FROM film_text

TRIM(TRAILING '.' FROM description) FROM film_text
```

Notes:
- `trim(string)` removes leading and trailing spaces from string.
- `trim(leading substring from string)` removes substring from the start of string.
- `trim(trailing substring from string)` removes substring from the end of string.

#### `locate`




## Group your SQL results







