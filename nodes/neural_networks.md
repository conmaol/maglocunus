# Neural networks

## A very simple neural network

Here is a diagram of a simple neural network, taken from the StatQuest tutorial [Essential main ideas of neural networks](https://www.youtube.com/watch?v=CqOfi41LfDw):

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["p1: 2.14"])
    A -- "-2.52" --> C(["p2: 1.29"])
    B -- "softplus" --> D(( ))
    C -- "softplus" --> E(( ))
    D -- "-1.3" --> F(["p3: -0.58"])
    E -- "2.28" --> F
    F -- "softplus" --> G(( ))
```

This neural network has one input and one output. In other words, its ‘type’ is $\mathbb{R}\to\mathbb{R}$. 

### The perceptrons

This simple network consists of three perceptrons, $p_1$, $p_2$ and $p_3$.

#### Perceptron *p<sub>1</sub>*

Here is perceptron $p_1$, with one input:

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["p1: 2.14"])
    B -- "softplus" --> D(( ))
```

Note that:
- $p_1 = \lambda x.\mathbf{softplus}(2.14 - 34.4x)$
- $p_1 \vdash \mathbb{R}\to\mathbb{R}$

#### Perceptron *p<sub>2</sub>*

Here is perceptron $p_2$, with one input:

```mermaid
graph LR
    A(( )) -- "-2.52" --> C(["p2: 1.29"])
    C -- "softplus" --> E(( ))
```

Note that:
- $p_2 = \lambda x.\mathbf{softplus}(1.29 - 2.52x)$
- $p_2 \vdash \mathbb{R}\to\mathbb{R}$

#### Perceptron *p<sub>3</sub>*

Here is perceptron $p_3$ with two inputs:

```mermaid
graph LR
    D(( )) -- "-1.3" --> F(["p3: -0.58"])
    E(( )) -- "2.28" --> F
    F -- "softplus" --> G(( ))
```

Note that:
- $p_3 = \lambda(x,y).\mathbf{softplus}(2.28y - 1.3x -0.58)$
- $p_3 \vdash \mathbb{R}\times\mathbb{R}\to\mathbb{R}$

### The first layer *l<sub>1</sub>*

This simple neural network consists of two layers.

Here is the first layer $l_1$:

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["p1: 2.14"])
    A -- "-2.52" --> C(["p2: 1.29"])
    B -- "softplus" --> D(( ))
    C -- "softplus" --> E(( ))
```

The first layer is itself a neural network, with one input and two outputs. It consists of two perceptrons, $p_1$ and $p_2$.

The function underlying this layer is:
- $l_1 = \lambda x.(p_1(x),p_2(x)) = \lambda x.(\mathbf{softplus}(2.14 - 34.4x),\mathbf{softplus}(1.29 - 2.52x)))$

We can define the $|$ perceptron combinator as follows, where both $p$ and $q$ are one-input perceptrons:
- $p|q = \lambda x.(p(x),q(x))$

Thus:
- $l_1 = p_1 | p_2$

Note that another combinator is thus also possible, where both $p$ and $q$ are one-input perceptrons:
- $p\\|q = \lambda(x,y)(p(x),q(y))$



----

Back to: [Index](index.md)
