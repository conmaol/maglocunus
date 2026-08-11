# Pandas

`Pandas` is a [Python](Python.md) library for working with tabular data, such as spreadsheets, CSV files, and database query results.

One important data structure provided by Pandas is the `Series` – a one-dimensional labelled array:

```
import pandas as pd
s = pd.Series([10, 20, 30])
print(s)
```

This code will output:

```
0   10
1   20
2   30
```

A Pandas series is very closely related to a [NumPy](../n/NumPy.md) ndarray.

The other important data structure provided by Pandas is the `DataFrame` – a table with rows and columns:

```
df = pd.DataFrame({
  "Name": ["Alice", "Bob", "Charlie"]
  "Age": [25, 30, 35]
})
print(df)
```

This code will output:

```
      Name  Age
0    Alice   25
1      Bob   30
2  Charlie   35
```

You can extract a column from a DataFrame (as a Series):

```
names = df["Name"]  # this is equivalent to pd.Series(["Alice", "Bob", "Charlie"])
```


### `read_csv()`

You can read in a CSV file and save it as a DataFrame:

```
df = pd.read_csv("people.csv")
```


----

Back up to: [Maglocunus](../index.md)
