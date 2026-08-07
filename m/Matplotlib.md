# Matplotlib

`Matplotlib` is the most widely used plotting and graphing library for [Python](../p/Python.md), allowing you to create charts, graphs and visualisations from data.

Matplotlib works well with [NumPy](../n/NumPy.md) arrays and with [Pandas](../p/Pandas.md) DataFrames.

### Histograms

You can create a histogram (frequency distribution) from a NumPy array of numbers as follows: 

```
from matplotlib import pyplot as plt
plt.hist(author_ages, range=(10, 80), bins=14,  edgecolor='black')
plt.title("Age of Top 100 Authors at Publication")
plt.xlabel("Age")
plt.ylabel("Count")
plt.show()
```

This will create and display a histogram with fourteen 5-year age range columns.


----

Back up to: [Maglocunus](../index.md)
