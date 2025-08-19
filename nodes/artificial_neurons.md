# Artificial neurons

An artificial neuron is a very simple computational model of how a biological neuron works.

Mathematically, an artificial neuron can be seen as a function from vectors of real numbers to real numbers.

For example:

```mermaid
graph LR
    A(( )) -- "[1.2, -7.3, 0.8]" --> B(neuron) -- "4.6" --> C(( ))
```

And the output from an artificial neron is a real number.

[diagram]

An artificial neuron has three internal parameters:
- a vector of weights, one per element in the input vector
- a bias
- an activation function


cf. [activation functions](activation_functions.md)

See also:
- Wikipedia page on [artificial neurons](https://en.wikipedia.org/wiki/Artificial_neuron)

----

Back to: [Index](index.md)
