# Softplus

The softplus function is a commonly used [activation function](activation_functions.md) in artificial neurons. 

The softplus function is defined as the function $f$ such that:
- $f(x)=\ln(1+e^x)$

The blue solid line in the following diagram represents the softplus function:

![The softplus function](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Softplus.svg/330px-Softplus.svg.png)

As can be seen from this diagram, softplus is essentially a smoothed version of the [ReLU](rectified_linear_unit.md) activation function (the dashed black line).

The output of softmax is never negative and there is no maximum value. For large negative inputs, the output is slightly greater than 0; for large positive inputs, the output is slightly greater than the input.

For example:
- softplus(0) = 0.693
- softplus(-2) = 0.127
- softplus(-4) = 0.018
- softplus(-6) = 0.003
- ...
- softplus(2) = 2.127
- softplus(4) = 4.018
- softplus(6) = 6.003
- ...

See also:
- Wikipedia page on [softplus](https://en.wikipedia.org/wiki/Softplus)

----

Back to: [Index](index.md)
