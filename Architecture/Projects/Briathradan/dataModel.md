# The Briathradan data model

At the most fundamental level, Briathradan contains: **Gaelic terms** (eg. *balach*, *gille*); **English terms** (eg. *boy*, *lad*); and a **many-to-many equivalence relation** between them and the relevant authorities.

Such a simple data model allows for the two basic tasks/queries:
- What does authority X say is the meaning of Gaelic term Y?
- What does authority X say is the right way of saying Y in Gaelic?

This simple data model takes the following, slightly normalised tabular form:

```
| Gaelic                                     |
| id  | form    | authority | pos            |
----------------------------------------------
| 1   | balach  | Dwelly    | masculine noun |
| 2   | gille   | Dwelly    | masculine noun |
| 3   | balach  | MacBain   | masculine noun |
| 4   | gille   | MacBain   | masculine noun |
| 5   | ballach | MacLaren  | masculine noun |
| ... | ...     | ...       | ...            |


| English      |
| ref | form   |
----------------
| 1   | boy    |
| 1   | lad    |
| 2   | boy    |
| 2   | lad    |
| 3   | boy    |
| 4   | lad    |
| 5   | laddie |
| ... | ...    |
```

Here is an SQL query for the Gaelic-to-English task::

```
SELECT English.form, Gaelic.authority
FROM Gaelic
JOIN English
ON Gaelic.id = English.ref
WHERE Gaelic.form LIKE 'gille';
```

And one for the English-to-Gaelic task:

```
SELECT Gaelic.form, Gaelic.pos, Gaelic.authority
FROM Gaelic
JOIN English
ON Gaelic.id = English.ref
WHERE English.form LIKE 'boy';
```

## Inflected variants

A Gaelic term will often have a range of inflected variants, eg. *balach* has the genitive singular form *balaich*, and *gille* has the plural form *gillean*.

In other words, we want to supplement our tasks as follows:
- What does authority X say is the likely meaning of Gaelic form Y?
- What does authority X say is the right way of saying Y in Gaelic, along with inflected variants?

Rather than include these as independent Gaelic terms, in the `Gaelic` table, it makes more sense, and is more efficient and elegant, to include them in a separate table, linked to entities in the `Gaelic terms` table:

```
| variants                 |
| ref | form    | type     |
----------------------------
| 1   | balaich | plural   |
| 1   | balaich | genitive |
| 2   | gillean | plural   |
| 3   | balaich | plural   | 
| ... | ...     | ...      |
```

The revised Gaelic-to-English task now looks something like:

```
SELECT English.form, Gaelic.authority
FROM Gaelic
JOIN variants
ON variants.ref = Gaelic.id
JOIN English
ON English.ref = Gaelic.id
WHERE Gaelic.form LIKE 'gillean'
OR variants.form LIKE 'gillean';
```

And the English-to-Gaelic task is:

```
SELECT Gaelic.form, Gaelic.pos, Gaelic.authority, variant.form, variant.type
FROM Gaelic
JOIN English
ON Gaelic.id = English.ref
JOIN variants
ON variants.ref = Gaelic.id
WHERE English.form LIKE 'boy';
```

## equivalence of Gaelics

```
| Gaelic                                              |
| id  | form    | authority | pos            | master |
-------------------------------------------------------
| 1   | balach  | Dwelly    | masculine noun |        |
| 2   | gille   | Dwelly    | masculine noun |        |
| 3   | balach  | MacBain   | masculine noun | 1      |
| 4   | gille   | MacBain   | masculine noun | 2      |
| 5   | ballach | MacLaren  | masculine noun | 1      |
| ... | ...     | ...       | ...            | ...    |
```

