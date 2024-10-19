# Briathradan

Some history:
- 2013: Lexicopia prototype (XML files + CLI)
- 2014–15: Lexicopia web app (XML files + web app)
- 2015–18: LEACAG terminology system / Co-àite? (RDF database? + Bootstrap)
- 2019-23: Am Briathradan (relational database + Bootstrap)

## Conceptual data model

At the most fundamental level, Briathradan contains: **Gaelic terms** (eg. *balach*, *gille*); **English terms** (eg. *boy*, *lad*); and a **many-to-many equivalence relation** between them (eg. *balach* = *boy*, *balach* = *lad*, *gille* = *boy*, *gille* = *lad*).

Such a simple data model allows for the two basic tasks/queries:
- What does Gaelic term X mean (in English)?
- What is the Gaelic for (English term) X?

This simple data model takes the following tabular form:

|Gaelic|English|
|balach|boy|
|balach|lad|
|gille|boy|
|gille|lad|

However, for language political reasons, Gaelic learners are also very interested in the **authority** (ie. the particular lexicographer or terminologist) behind a particular equivalence. In other words, the queries they often want to make are things like:
- What does authority X say that Gaelic term Y means?
- What does authority X says is the Gaelic for Y?

