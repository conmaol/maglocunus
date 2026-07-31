# Data normalisation

Normalisation is the process of organising tabular data so as to:
- reduce redundancy (unnecessary duplication)
- improve data integrity (consistency and correctness)

Normalisation was introduced by Edgar F. Codd, the inventor of the tabular data model.

There is a hierarchy of normal forms, from least to most strict:
- [first normal form (1NF)](#first-normal-form)
- [second normal form (2NF)](#second-normal-form)
- [third normal form (3NF)](#third-normal-form)

## First normal form

A tabular data model is in first normal form (1NF) just in case:
- Every table has a primary key ie. every row can be uniquely identified.
- No cell in any table contains multiple values (ie. no arrays).
- There are no repeating groups of columns in any table.

For example, look at the following input table called `members`:

| id | first | last | phone |
| -- | ----- | ---- | ---- |
| 1 | Kate | Random | 363-1709 |
| 2 | Alex | Smith | 777-1234, 174-6244, 774-8800 |
| 3 | Kate | Apple | 893-4592 |
| 4 | Mark | Cunus | 289-4396, 116-8114 |

This table is not in first normal form, because the `phone` column can contain multiple values. This makes it difficult to retrieve any particular phone number.

Here is another version of the same table:

| id | first | last | phone1 | phone2 | phone3 |
| -- | ----- | ---- | ---- | --- | --- |
| 1 | Kate | Random | 363-1709 | | |
| 2 | Alex | Smith | 777-1234 | 174-6244 | 774-8800 |
| 3 | Kate | Apple | 893-4592 | | |
| 4 | Mark | Cunus | 289-4396 | 116-8114 | |

Again this table is not in first normal form, because there is a repeating group of columns – `phone1`, `phone2`, `phone3`. Again, it is difficult to retrieve any particular phone number, there is no way for a member to have more than three phone numbers, and there will be lots of wasted space in the database, since most members will have just the one phone number.

To achieve first normal form, you will need to split this table into two, one table for `members`, and a second table for `phone numbers`:

| member.id | first | last |
| -- | ----- | ---- |
| 1 | Kate | Random |
| 2 | Alex | Smith |
| 3 | Kate | Apple |
| 4 | Mark | Cunus |

| phone.id | number | member |
| -- | ---- | -- |
| 1 | 363-1709 | 1 |
| 2 | 777-1234 | 2 |
| 3 | 174-6244 | 2 | 
| 4 | 774-8800 | 2 |
| 5 | 893-4592 | 3 |
| 6 | 289-4396 | 4 |
| 7 | 116-8114 | 4 |

Note that, in the second `phone numbers` table, the `member` column is a *foreign key*, referring back to the `member.id` primary key column in the first `members` table.

Back up to: [Top](#)

## Second normal form (2NF)

A tabular data model is in second normal form (2NF) just in case:
- It is in first normal form.
- Every non-key attribute is functionally dependent on the entire primary key (and not just on one part of a composite primary key).

| member.id | first | last | game.id | venue | score |
| -- | ----- | ---- | ---- | -- | -- |
| 1 | Kate | Random | 1 | Meadowbank | 11 |
| 2 | Alex | Smith | 1 | Meadowbank | 3 |
| 1 | Kate | Random | 2 | Craiglockhart | 11 |
| 3 | Kate | Apple | 2 | Craiglockhart | 7 |
| 2 | Alex | Smith | 3 | Meadowbank | 9 |
| 3 | Kate | Apple | 3 | Meadowbank | 11 |

This table is in first normal form, because it has a primary key consisting of `member.id` and `game.id`, and contains no multi-value attributes or repeating groups of columns.

However, the table is not in second normal form because:
- The attributes `first` and `last` are functionally dependent on `member.id` on its own, and not just on the whole composite primary key.
- The attribute `venue` is functionally dependent on `game.id` on its own, again not just on the whole composite primary key.
- The attribute `score` is functionally dependent on the whole composite primary key – `member.id + game.id`.

In other words, this table contains data about two different entity types – members and games. To turn it into second normal form, we need to have a separate table for each of these entity types, as well as a third for the `score` attribute:

| member.id | first | last |
| -- | ----- | ---- |
| 1 | Kate | Random |
| 2 | Alex | Smith |
| 3 | Kate | Apple |

| game.id | venue |
| ---- | -- |
| 1 | Meadowbank |
| 2 | Craiglockhart |
| 3 | Meadowbank |

| member.id | game.id | score |
| -- | ----- | ---- |
| 1 | 1 | 11 |
| 2 | 1 | 3 |
| 1 | 2 | 11 |
| 3 | 2 | 7 |
| 2 | 3 | 9 |
| 3 | 3 | 11 |

Back up to: [Top](#)

## Third normal form (3NF)



Back up to: [Top](#)

----

Back up to: [Maglocunus](../index.md)
