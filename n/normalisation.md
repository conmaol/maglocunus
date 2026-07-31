# Data normalisation

Normalisation is the process of organising tabular data so as to:
- reduce redundancy (unnecessary duplication)
- improve data integrity (consistency and correctness)

Normalisation was introduced by Edgar F. Codd, the inventor of the tabular data model.

There is a hierarchy of normal forms, from least to most strict:
- [first normal form (1NF)](#first-normal-form)
- second normal form (2NF)
- third normal form (3NF)
- mm

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

How about this version?

| id | first | last | phone1 | phone2 | phone3 |
| -- | ----- | ---- | ---- | --- | --- |
| 1 | Kate | Random | 363-1709 | | |
| 2 | Alex | Smith | 777-1234 | 174-6244 | 774-8800 |
| 3 | Kate | Apple | 893-4592 | | |
| 4 | Mark | Cunus | 289-4396 | 116-8114 | |

Again this table is not in first normal form, because there is a repeating group of columns – ‘phone1’, ‘phone2’, ‘phone3’. Again, it is difficult to retrieve any particular phone number, there is no way for a member to have more than three phone numbers, and there will be lots of wasted space in the database, since most members will have just the one phone number.

To achieve first normal form, you will need to split this table into two, one for `members`, and a second for `phone numbers`:

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


## Second normal form (2NF)



----

Back up to: [Maglocunus](../index.md)
