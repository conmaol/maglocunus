# Pandas

`Pandas` is a [Python](Python.md) library for working with tabular data, such as spreadsheets, CSV files, and database query results.

The main data structures provides by Pandas are:
- `Series` – a one-dimensional labelled array
- `DataFrame` – a table with rows and columns

For example:

```
import pandas as pd
s = pd.Series([10, 20, 30])
print(s)
df = pd.DataFrame({
  "Name": ["Alice", "Bob", "Charlie"]
  "Age": [25, 30, 35]
})
print(df)
```

This code outputs:

```
0   10
1   20
3   30

      Name  Age
0    Alice   25
1      Bob   30
2  Charlie   35
```

Note that:
- `df["Name"]` returns the same as `pd.Series(["Alice", "Bob", "Charlie"])`



You can read in a CSV file and save it as a DataFrame:

```
df = pd.read_csv("people.csv")
```


----

Back up to: [Maglocunus](../index.md)
