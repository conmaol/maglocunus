# Rectified linear unit

The rectified linear unit (ReLU) function is a commonly used [activation function](activation_functions.md) inside an artificial neuron. 

ReLU is defined as the function $f$ such that:
- If $x<0$, then $f(x)=0$.
- Otherwise, $f(x) = x$.

The blue line in the following graph represents the ReLU function:

![ReLU graph](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/ReLU_and_GELU.svg/308px-ReLU_and_GELU.svg.png)

Note that the output of ReLU is never negative and there is no maximum value. ReLU is essentially just the identify function for non-negative inputs.

For example:
- ReLU(0) = 0
- ReLU(-2) = 0
- ReLU(-4) = 0
- ReLU(-6) = 0
- ...
- ReLU(2) = 2
- ReLU(4) = 4
- ReLU(6) = 6
- ...

See also:
- Wikipedia page on [ReLU](https://en.wikipedia.org/wiki/Rectifier_(neural_networks))
- ReLU is also known as the [ramp function](https://en.wikipedia.org/wiki/Ramp_function)

----

Back to: [Index](index.md)
