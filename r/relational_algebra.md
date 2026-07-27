# Relational algebra

`Relational algebra` is the mathematical foundation of SQL databases.

Relational algebra (also known as relational ‘calculus’) consists of the following five fundamental operations:
- [projections](#projections)
- [restrictions](#restrictions)
- [unions](#unions)
- [joins](#joins)
- [differences](#differences)

Any DBMS that implements all five of these operations is *relationally complete*.

There are two additional operations that are useful to know about:
- products
- intersections

## Projections

The `project` operation copies selected columns from an existing input table into a new output table.

For example, given the following input table called `members`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

The following projection:

```
PROJECT id, last
FROM members
```

Results in the following output table (a ‘vertical subset’):

| id | last |
| -- | ---- |
| 1 | Random |
| 2 | Smith |
| 3 | Apple |
| 4 | Cunus |
| 5 | Young |

Back to: [Top](#)

## Restrictions

The `restrict` operation uses a condition to filter rows from an existing input table into a new output table.

For example, given the following input table called `members`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

The following restriction:

```
RESTRICT
FROM members
WHERE first = 'Kate'
```

Results in the following output table (a ‘horizontal subset’):

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 3 | Kate | Apple | 1983 |

It is common to use a restriction followed by a projection of the results table.  

For example:

```
PROJECT last, year
FROM
(RESTRICT
FROM members
WHERE first = 'Kate')
```

This would give the following output table:

| last | year |
| ---- | ---- |
| Random | 1992 |
| Apple | 1983 |

Back to: [Top](#)

## Unions

The `union` operation takes all the rows from two existing input tables and combines them into a new output table.

```
member
UNION
new_member
```

duplicates?


Back to: [Top](#)

## Joins

Back to: [Top](#)

## Differences

Back to: [Top](#)


----

Back up to: [Maglocunus](../index.md)
