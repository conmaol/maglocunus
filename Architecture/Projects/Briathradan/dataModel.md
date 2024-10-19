# The Briathradan data model

At the most fundamental level, Briathradan contains: **Gaelic terms** (eg. *balach*, *gille*); **English terms** (eg. *boy*, *lad*); and a **many-to-many equivalence relation** between them (eg. *balach* = *boy*, *balach* = *lad*, *gille* = *boy*, *gille* = *lad*).

Such a simple data model allows for the two basic tasks/queries:
- What does Gaelic term X mean (in English)?
- What is the Gaelic for (English term) X?

This simple data model takes the following tabular form:

```
| equivalence      |
| Gaelic | English |
--------------------
| balach | boy     |
| balach | lad     |
| gille  | boy     |
| gille  | lad     |
| ...    | ...     | 
```
Normalising this data model to reduce redundancy we get:

```
| Gaelic terms |
| id  | term   |
----------------
| 1   | balach |
| 2   | gille  |
| ... | ...    |


| English terms |
| id  | term    |
-----------------
| 1   | boy     |
| 2   | lad     |
| ... | ...     |


| equivalence            |
| Gaelic ID | English ID |
--------------------------
| 1         | 1          |
| 1         | 2          |
| 2         | 1          |
| 2         | 2          |
| ...       | ...        |
```

## Authority

However, for language political reasons, Gaelic learners are also very interested in the **authority** (ie. the particular lexicographer or terminologist) behind a particular equivalence. In other words, the queries they often want to make are things like:
- What does authority X say that Gaelic term Y means?
- What does authority X say is the Gaelic for Y?

We can add authority into the normalised table-based model as follows:

```
| authority      |
| id  | name     |
------------------
| 1   | Dwelly   |
| 2   | MacBain  |
| 3   | MacLaren |
| ... | ...      |  

| Gaelic terms             |
| id  | term   | authority |
----------------------------
| 1   | balach  | 1        |
| 2   | gille   | 1        |
| 3   | balach  | 2        |
| 4   | gille   | 2        |
| 5   | ballach | 3        |
| 6   | gille   | 3        |
| ... | ...     | ...      |


| equivalent          |
| Gaelic id | English |
-----------------------
| 1   | boy           |
| 1   | lad           |
| 2   | boy           |
| 2   | lad           |
| 3   | boy           |
| 4   | lad           |
| ... | ...           |


| equivalence                           |
| Gaelic ID | English ID | authority ID |
-----------------------------------------
| 1         | 1          | 1            |
| 1         | 2          | 2            |
| 2         | 1          | 2            |
| 2         | 2          | 1            |
| 2         | 1          | 1            |
| 2         | 2          | 3            |
| ...       | ...        | ...          |
```

Here is an ERD for this data model so far:

![Briathradan conceptual model 1](diagrams/briathradan-conceptual-model-1.jpg)

## Inflectional forms

A Gaelic term will often have a range of inflectional variants:
- *balach* has the plural form *balaich* and the genitive singular *balaich*
- *gille* has the plural form *gillean*

- What does authority X say that Gaelic term/form Y means?
- What does authority X say are the variant forms of Gaelic term Y?

Rather than include these as independent Gaelic terms, it makes more sense, and is more efficient and elegant, to include them in a separate table, linked to entities in the `Gaelic terms` table:

```
| variants |
| Gaelic ID | variant | class    | authority |
----------------------------------
| 1         | balaich | plural   | 1 |
| 1         | balaich | genitive | 1 |
| 2         | gillean | plural   | 1 |
| 2         | gillean | plural   | 2 |
| 2         | gillean | plural   | 2 |
| ...       | ...     | ...      |
```




## Hidden English terms?
