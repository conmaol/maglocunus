# Neural networks

## A very simple neural network

Here is a diagram of a simple neural network (taken from StatQuest):

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["f: 2.14"])
    A -- "-2.52" --> C(["g: 1.29"])
    B -- "softplus" --> D(( ))
    C -- "softplus" --> E(( ))
    D -- "-1.3" --> F(["h: -0.58"])
    E -- "2.28" --> F
    F -- "softplus" --> G(( ))
```

This neural network has one input and one output. 

### The individual neurons

This simple network consists of three artificial neurons, which I've called $f$, $g$ and $h$.

#### Neuron *f*

Here is artificial neuron $f$:

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["f: 2.14"])
    B -- "softplus" --> D(( ))
```

Note that:
- $f = \lambda x.\mathbf{softplus}(2.14 - 34.4x)$

#### Neuron *g*

Here is artificial neuron $g$:

```mermaid
graph LR
    A(( )) -- "-2.52" --> C(["g: 1.29"])
    C -- "softplus" --> E(( ))
```

Note that:
- $g = \lambda x.\mathbf{softplus}(1.29 - 2.52x)$

#### Neuron *h*

Here is artificial neuron $h$:

```mermaid
graph LR
    D(( )) -- "-1.3" --> F(["h: -0.58"])
    E(( )) -- "2.28" --> F
    F -- "softplus" --> G(( ))
```

Note that:
- $h = \lambda(x,y).\mathbf{softplus}(2.28y - 1.3x -0.58)$

### The first layer

This simple neural network consists of two layers.

Here is the first layer:

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["f: 2.14"])
    A -- "-2.52" --> C(["g: 1.29"])
    B -- "softplus" --> D(( ))
    C -- "softplus" --> E(( ))
```

The first layer is itself a neural network, with one input and two outputs, and consisting of two neurons.


----

Back to: [Index](index.md)
