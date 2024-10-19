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
Normalising this data model we get:

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

However, for language political reasons, Gaelic learners are also very interested in the **authority** (ie. the particular lexicographer or terminologist) behind a particular equivalence. In other words, the queries they often want to make are things like:
- What does authority X say that Gaelic term Y means?
- What does authority X says is the Gaelic for Y?

Simple table-based model:
```
| equivalence                        |
| Gaelic ID | English ID | authority |
--------------------------------------
| 1         | 1          | Dwelly    |
| 1         | 2          | MacBain   |
| 2         | 1          | MacBain   |
| 2         | 2          | Dwelly    |
| 2         | 1          | Dwelly    |
| 2         | 2          | MacLaren  |
| ...       | ...        | ...       |
```

Normalised to:
```
| authority      |
| id  | name     |
------------------
| 1   | Dwelly   |
| 2   | MacBain  |
| 3   | MacLaren |
| ... | ...      |  

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

Diagram

Inflectional forms?

Hidden English terms?
