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

For example, given the following input table called `members`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |

And a second input table called `newMembers`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

The following union:

```
members
UNION
newMembers
```
Results in the following output table:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

Note that the two input tables need to be *union compatible* – their columns must be defined over the same domains.

Back to: [Top](#)

## Products

The `product` operation combines every row of one input table with every row of another.

For example, given the following 4x4 input table called `members`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |

And a second 5x3 input table called `games`:

| id | player | score |
| -- | ------ | ----- |
| 1 | 1 | 11 |
| 2 | 1 | 7 |
| 3 | 2 | 3 |
| 4 | 3 | 11 |
| 5 | 2 | 9 |

The following product:

```
members
PRODUCT
games
```

Results in the following 20x7 output table:

| members.id | members.first | members.last | members.year | games.id | games.player | games.score |
| -- | ----- | ---- | ---- | -- | ----- | --- |
| 1 | Kate | Random | 1992 | 1 | 1 | 11 |
| 1 | Kate | Random | 1992 | 2 | 1 | 7 |
| 1 | Kate | Random | 1992 | 3 | 2 | 3 |
| 1 | Kate | Random | 1992 | 4 | 3 | 11 |
| 1 | Kate | Random | 1992 | 5 | 2 | 9 |
| 2 | Alex | Smith | 2001 | 1 | 1 | 11 |
| 2 | Alex | Smith | 2001 | 2 | 1 | 7 |
| 2 | Alex | Smith | 2001 | 3 | 2 | 3 |
| 2 | Alex | Smith | 2001 | 4 | 3 | 11 |
| 2 | Alex | Smith | 2001 | 5 | 2 | 9 |
| 3 | Kate | Apple | 1983 | 1 | 1 | 11 |
| 3 | Kate | Apple | 1983 | 2 | 1 | 7 |
| 3 | Kate | Apple | 1983 | 3 | 2 | 3 |
| 3 | Kate | Apple | 1983 | 4 | 3 | 11 |
| 3 | Kate | Apple | 1983 | 5 | 2 | 9 |
| 4 | Mark | Cunus | 1978 | 1 | 1 | 11 |
| 4 | Mark | Cunus | 1978 | 2 | 1 | 7 |
| 4 | Mark | Cunus | 1978 | 3 | 2 | 3 |
| 4 | Mark | Cunus | 1978 | 4 | 3 | 11 |
| 4 | Mark | Cunus | 1978 | 5 | 2 | 9 |



## Inner joins (equi joins)

We can follow up a product operation with a restriction to create an ‘inner join’:

```
RESTRICT
FROM (members PRODUCT games)
WHERE members.id = games.player
```

This combination of operations gives the following output table:

| members.id | members.first | members.last | members.year | games.id | games.player | games.score |
| -- | ----- | ---- | ---- | -- | ------ | ----- |
| 1 | Kate | Random | 1992 | 1 | 1 | 11 |
| 1 | Kate | Random | 1992 | 2 | 1 | 7 |
| 2 | Alex | Smith | 2001 | 3 | 2 | 3 |
| 2 | Alex | Smith | 2001 | 5 | 2 | 9 |
| 3 | Kate | Apple | 1983 | 4 | 3 | 11 |

### Left outer joins

| members.id | members.first | members.last | members.year | games.id | games.player | games.score |
| -- | ----- | ---- | ---- | -- | ------ | ----- |
| 1 | Kate | Random | 1992 | 1 | 1 | 11 |
| 1 | Kate | Random | 1992 | 2 | 1 | 7 |
| 2 | Alex | Smith | 2001 | 3 | 2 | 3 |
| 2 | Alex | Smith | 2001 | 5 | 2 | 9 |
| 3 | Kate | Apple | 1983 | 4 | 3 | 11 |
| 4 | Mark | Cunus | 1978 | null | null | null |

It is possible to define left outer joins in terms of inner joins and other relational operators.


### Right outer joins

| members.id | members.first | members.last | members.year | games.id | games.player | games.score |
| -- | ----- | ---- | ---- | -- | ------ | ----- |
| 1 | Kate | Random | 1992 | 1 | 1 | 11 |
| 1 | Kate | Random | 1992 | 2 | 1 | 7 |
| 2 | Alex | Smith | 2001 | 3 | 2 | 3 |
| 2 | Alex | Smith | 2001 | 5 | 2 | 9 |
| 3 | Kate | Apple | 1983 | 4 | 3 | 11 |

Back to: [Top](#)

## Differences

Differences must be union compatible.

members:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

old members:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |

```
members
MINUS
oldMembers
```

gives

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 5 | Tom  | Young | 1992 |

Back to: [Top](#)

## Intersect

over30s

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

under40s:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 5 | Tom  | Young | 1992 |

```
over30s
INTERSECT
under40s
```

gives

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 5 | Tom  | Young | 1992 |



----

Back up to: [Maglocunus](../index.md)
