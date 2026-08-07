# SciPy

`SciPy` (Scientific Python) is a [Python](../p/Python.md) library that builds on [NumPy](../n/NumPy.md) and provides a large collection of mathematical, scientific and engineering functions.

You can use SciPy to find the mode of an array of numbers:

```
%pip install scipy
import numpy as np
from script import stats
example_array = np.array([24, 16, 12, 10, 12, 28, 38, 12, 28, 24])
print(stats.mode(example_array))
```

The output will look like this:

```
ModeResult(mode=array([12]), count=array([3]))
```

The first element is the mode, the second is its frequency.

----

Back up to: [Maglocunus](../index.md)
