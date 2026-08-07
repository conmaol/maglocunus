# Pandas

`Pandas` is a [Python](Python.md) library for working with tabular data, such as spreadsheets, CSV files, and database query results.

### Series and DataFrames

The main data structures provides by Pandas are:
- `Series` – a one-dimensional labelled array
- `DataFrame` – a table with rows and columns

For example, the following code:

```
import pandas as pd
s = pd.Series([10, 20, 30])
print(s)
```
Will output:

```
0   10
1   20
2   30
```

Similarly, the following code:

```
df = pd.DataFrame({
  "Name": ["Alice", "Bob", "Charlie"]
  "Age": [25, 30, 35]
})
print(df)
```

Will output:

```
      Name  Age
0    Alice   25
1      Bob   30
2  Charlie   35
```

You can extract a column from a DataFrame as follows:

```
names = df["Name"]  # this is a Series, equivalent to pd.Series(["Alice", "Bob", "Charlie"])
```
### `read_csv()`

You can read in a CSV file and save it as a DataFrame:

```
df = pd.read_csv("people.csv")
```


----

Back up to: [Maglocunus](../index.md)
