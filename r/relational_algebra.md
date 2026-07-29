# Relational algebra

`Relational algebra`, sometimes called ‘relational calculus’, is the mathematical foundation of SQL databases.

The algebra consists of the following five fundamental operations:
- [projections](#projections)
- [restrictions](#restrictions)
- [unions](#unions)
- [products](#products)
- [differences](#differences)

Any DBMS that implements all five of these operations is *relationally complete*.

Other operations can then be defined in terms of these five operations:
- [inner joins](#inner-joins)
- [intersections](#intersections)
- [outer joins](#outer-joins)

## Projections

The `project` operation Π copies selected columns from an existing input table into a new output table.

For example, given the following input table called `members`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |

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

The above projection is sometimes written as $\Pi_{id,last}(members)$.

Back to: [Top](#)

## Restrictions

The `restrict` operation σ uses a condition to filter rows from an existing input table into a new output table.

For example, given the following input table called `members`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |

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

The above restriction is sometimes written as $\sigma_{first=Kate}(members)$.

It is common to use a restriction followed by a projection of the results table. For example:

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

The `union` operation $\bigcup$ takes all the rows from two existing input tables and combines them into a new output table.

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

The above restriction is sometimes written as $\bigcup(members,newMembers)$.

Note that the two input tables need to be *union compatible* – their columns must be defined over the same domains.

Back to: [Top](#)

## Products

The `product` operation × combines every row of one input table with every row of another.

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

The above product is sometimes written as $members\times newMembers$.

Back to: [Top](#)

## Differences

The `difference` operation $-$ takes two input tables and creates an output table which is the same as the first input table except that every row that is also in the second input table has been removed.

For example, given the following input table called `mambers`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

And another input table called `over40s`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |

The following difference:

```
members
MINUS
over40s
```

Results in the following output table:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 5 | Tom  | Young | 1992 |

The above restriction is sometimes written as $members-over40s$.

Note that the two input tables need to be *union compatible* – their columns must be defined over the same domains.

Back to: [Top](#)

## Inner joins

The `inner join` operation ⨝ applies a restriction to the product of two tables.

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

The following complex operation:

```
RESTRICT
FROM (members PRODUCT games)
WHERE members.id = games.player
```

Results in the following output table:

| members.id | members.first | members.last | members.year | games.id | games.player | games.score |
| -- | ----- | ---- | ---- | -- | ------ | ----- |
| 1 | Kate | Random | 1992 | 1 | 1 | 11 |
| 1 | Kate | Random | 1992 | 2 | 1 | 7 |
| 2 | Alex | Smith | 2001 | 3 | 2 | 3 |
| 2 | Alex | Smith | 2001 | 5 | 2 | 9 |
| 3 | Kate | Apple | 1983 | 4 | 3 | 11 |

This inner join operation can also be written as follows:

```
JOIN members, games
ON members.id = games.player
```

Back to: [Top](#)

## Intersections

The `intersection` operation ∩ takes two input tables and creates a new output tables containing just those rows that are common to both.

For example, given the following input table called `over30s`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 3 | Kate | Apple | 1983 |
| 4 | Mark | Cunus | 1978 |
| 5 | Tom  | Young | 1992 |

And the following second input table called `under40s`:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 2 | Alex | Smith | 2001 |
| 5 | Tom  | Young | 1992 |

The following intersection operation:

```
over30s
INTERSECT
under40s
```
Results in the following output table:

| id | first | last | year |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 1992 |
| 5 | Tom  | Young | 1992 |

Back to: [Top](#)

## Outer joins

Like an inner join, an outer join applies a restriction to the product of two tables, but in addition ensures that every row in the first (left) input table appears at least once in the output table, with potentially `null` values for the second lot of columns. 

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

The (left) outer join of these two tables on the condition `members.id = games.player` is:

| members.id | members.first | members.last | members.year | games.id | games.player | games.score |
| -- | ----- | ---- | ---- | -- | ------ | ----- |
| 1 | Kate | Random | 1992 | 1 | 1 | 11 |
| 1 | Kate | Random | 1992 | 2 | 1 | 7 |
| 2 | Alex | Smith | 2001 | 3 | 2 | 3 |
| 2 | Alex | Smith | 2001 | 5 | 2 | 9 |
| 3 | Kate | Apple | 1983 | 4 | 3 | 11 |
| 4 | Mark | Cunus | 1978 | null | null | null |

Back to: [Top](#)

----

Sources:



----

Back up to: [Maglocunus](../index.md)
