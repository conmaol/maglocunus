# Basic data analysis

Some introductory notes from LinkedIn Learning course *Learning Excel: Data Analysis* (Curt Frye, September 2022).

## Foundational concepts of data analysis

In its simplest form a dataset can be presented as a list of numbers (integers), eg. a column of cells in a spreadsheet, like:

```
Days in transit = [23, 38, 29, 28, 30, 28, 29, 27, 27, 28, 37]
```

One basic operation on this kind of dataset is to **sort** it:

```
Days in transit (sorted) = [23, 27, 27, 28, 28, 28, 29, 29, 30, 37, 38]
```

The most basic descriptive facts about this kind of dataset are:
- the **mean** – the average value ie. (23 + 38 + 29 + 28 + 30 + 28 + 29 + 27 + 27 + 28 + 37) / 11 = 29.45 days
- the **median** – the middle value in the sorted dataset ie. 28 days
- the **mode** – the mode common value ie. 28 days

If the mean and the median are close together, then the data is generally very evenly distributed (with few outliers).

Importantly, at its most fundamental level, even this very simple kind of dataset is a graph:
- there are 11 (labelled) nodes, each of which represents a shipment
- there is a non-finite set of (non-negative) integers, representing the number of days the shipment was in transit
- every shipment node is connected to exactly one integer node, by a labelled edge (ie. this is numeric data).

The basic facts are:

```
shipment(x1)
shipment(x2)
. . .
shipment(x11)
days_in_transit(x1,23)
days_in_transit(x2,38)
. . .
days_in_transit(x11,37)
```

And the dataset schema:

for all x, x is a (non-negative) integer or x is a shipment
if x is a shipment then there is exactly one y such that y is an integer and y is connected to X by the days in transit relation
there are no other relations

