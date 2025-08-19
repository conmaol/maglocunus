# Artificial neurons

An artificial neuron is a very simple computational model of how a biological neuron works.

Mathematically, an artificial neuron can be seen as a function from vectors of real numbers to real numbers.

The function underlying an artificial neuron has the following form:
- $f(x_1,x_2,\ldots,x_n) = g((x_1,x_2,\ldots,x_n) \cdot (w_1,w_2,\ldots,w_n) + b) = g(\sum_{i=1}^{n} x_i w_i + b)$

Where:
- Each $w_i$ is a weight (a real number).
- $b$ is the bias (a real number).
- $g$ is an activation function.

You take each input, multiply it by the relevant weight, add them all together, add on the bias, and then pass the whole thing through the activation function.

Here is an example of an artificial neuron:
- $f(x_1,x_2,x_3) = \tanh((x_1,x_2,x_3) \cdot (0.4,-5.7,6.0) + 3.1) = \tanh(0.4x_1 - 5.7x_2 + 6x_3 + 3.1)$


cf. [activation functions](activation_functions.md)

See also:
- Wikipedia page on [artificial neurons](https://en.wikipedia.org/wiki/Artificial_neuron)

----

Back to: [Index](index.md)
