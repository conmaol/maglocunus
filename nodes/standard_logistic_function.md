# The standard logistic function

The standard logistic function is a sigmoid function, commonly used as an [activation function](activation_functions.md) in artificial neurons. 

The standard logistic function is defined as the function $f$ such that:
- $f(x)=\frac{1}{1+e^{-x}}=\frac{e^x}{e^x+1}$

The following curve represents the standard logistic function:
![standard logistic function](https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Logistic-curve.svg/330px-Logistic-curve.svg.png)

Note that the output of the standard logistic function is between 0 and 1 (but never actually 0 or 1). For negative inputs, the output is less than 0.5; for positive inputs, the output is greater than 0.5.

For example:
- slf(0) = 0.5
- slf(1) = 0.731
- slf(2) = 0.881
- slf(3) = 0.953
- slf(6) = 0.998
- ...
- slf(-1) = 0.269
- slf(-2) = 0.119
- slf(-3) = 0.047
- slf(-6) = 0.002
- ...

See also:
- Wikipedia page on [logistic functions](https://en.wikipedia.org/wiki/Logistic_function)

----

Back to: [Index](index.md)
