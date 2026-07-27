# Relational algebra

`Relational algebra` is the mathematical foundation of relational (ie. tabular) databases.

Relational algebra consists of the following operations:
- [project](#project)
- [restrict](#restrict)
- [union](#union)
- [join](#join)
- mm

## Project

The `project` operation copies selected columns from an existing input table into a new output table.

```
PROJECT member_number, last_name
FROM member
```

## Restrict

The `restrict` operation uses a condition to filter rows from an existing input table into a new output table.

```
RESTRICT
FROM member
WHERE first_name = 'Kate'
```

## Union

The `union` operation takes all the rows from two existing input tables and combines them into a new output table.

```
member
UNION
new_member
```



## Join



----

Back up to: [Top](../index.md)
