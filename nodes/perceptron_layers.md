# Perceptron layers

[Perceptrons](perceptrons.md) of the same arity can be combined into a perceptron layer.

### Unary perceptron layers

Two or more unary perceptrons can be combined into a unary perceptron layer.

Here is perceptron $\mathbf{P_1}$, with one input:

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["P1: 2.14"])
    B -- "softplus" --> D(( ))
```
And perceptron $\mathbf{P_2}$, which also has one input:

```mermaid
graph LR
    A(( )) -- "-2.52" --> C(["P2: 1.29"])
    C -- "softplus" --> E(( ))
```

Note that:
- $\mathbf{P_1} = \lambda x(\mathbf{softplus}(2.14 - 34.4x)) \vdash \mathbb{R}\to\mathbb{R}$
- $\mathbf{P_2} = \lambda x(\mathbf{softplus}(1.29 - 2.52x)) \vdash \mathbb{R}\to\mathbb{R}$

Since these two perceptrons have the same arity they can be combined into the perceptron layer $\mathbf{L_1}$:

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["P1: 2.14"])
    A -- "-2.52" --> C(["P2: 1.29"])
    B -- "softplus" --> D(( ))
    C -- "softplus" --> E(( ))
```

The following perceptron combinator is used to create these parallel layers:
- $\otimes = \lambda(P_1,P_2,\ldots, P_n)\lambda(x_1,x_2,\ldots,x_m)(P_1(x_1,x_2,\ldots,x_m),P_2(x_1,x_2,\ldots,x_m),\ldots, P_n(x_1,x_2,\ldots,x_m)) \vdash (\mathbb{R}^m\to\mathbb{R})^n \to (\mathbb{R}^m\to\mathbb{R}^n)$

So:
- $\mathbf{L_1} = \mathbf{P_1}\otimes\mathbf{P_2}$
- $\mathbf{L_1} = \lambda(P,Q)\lambda x(Px,Qx)(\mathbf{P_1},\mathbf{P_2})$
- $\mathbf{L_1} = \lambda x(\mathbf{P_1}x,\mathbf{P_2}x)$
- $\mathbf{L_1} = \lambda x(\lambda y(\mathbf{softplus}(2.14 - 34.4y))x,\lambda y(\mathbf{softplus}(1.29 - 2.52y))x)$
- $\mathbf{L_1} = \lambda x(\mathbf{softplus}(2.14 - 34.4x),\mathbf{softplus}(1.29 - 2.52x)) \vdash \mathbb{R}\to(\mathbb{R},\mathbb{R})$

You can also create a unary perceptron stack with three or more perceptrons.

Here is a third unary perceptron $\mathbf{P_3} = \lambda x(\mathbf{ReLU}(0.7x - 4.23)) \vdash \mathbb{R}\to\mathbb{R}$:

```mermaid
graph LR
    A(( )) -- "0.7" --> C(["P3: -4.23"])
    C -- "ReLU" --> E(( ))
```

And here is a three perceptron layer $\mathbf{L_2}$, formed out of $\mathbf{P_1}$, $\mathbf{P_2}$ and $\mathbf{P_3}$:

```mermaid
graph LR
    A(( )) -- "-34.4" --> B(["P1: 2.14"])
    A -- "-2.52" --> C(["P2: 1.29"])
    A -- "0.7" --> D(["P3: -4.23"])
    B -- "softplus" --> E(( ))
    C -- "softplus" --> F(( ))
    D -- "ReLU" --> G(( ))
```

So:
- $\mathbf{L_2} = \mathbf{P_1}\otimes\mathbf{P_2}\otimes\mathbf{P_3}$
- $\mathbf{L_2} = \lambda(P,Q,R)\lambda x(Px,Qx,Rx)(\mathbf{P_1},\mathbf{P_2},\mathbf{P_3})$
- $\mathbf{L_2} = \lambda x(\mathbf{P_1}x,\mathbf{P_2}x,\mathbf{P_3}x)$
- $\mathbf{L_2} = \lambda x(\lambda y(\mathbf{softplus}(2.14 - 34.4y))x,\lambda y(\mathbf{softplus}(1.29 - 2.52y))x,\lambda y(\mathbf{ReLU}(0.7y - 4.23))x)$
- $\mathbf{L_2} = \lambda x(\mathbf{softplus}(2.14 - 34.4x),\mathbf{softplus}(1.29 - 2.52x),\mathbf{ReLU}(0.7x - 4.23)) \vdash \mathbb{R}\to(\mathbb{R},\mathbb{R},\mathbb{R})$

Note that a unary perceptron layer has one input and $n$ outputs, where $n$ is the number of layered perceptrons. 

### Binary perceptron layers

Two or more binary perceptrons can be combined into a binary perceptron layer.

Here is binary perceptron $\mathbf{P_4} = \lambda(x,y)(\mathbf{softplus}(2.28y - 1.3x -0.58)) \vdash (\mathbb{R},\mathbb{R})\to\mathbb{R}$:

```mermaid
graph LR
    D(( )) -- "-1.3" --> F(["P4: -0.58"])
    E(( )) -- "2.28" --> F
    F -- "softplus" --> G(( ))
```

And a second binary perceptron $\mathbf{P_5} = \lambda(x,y)(\mathbf{ReLU}(6.17x + 0.11y + 3.14)) \vdash (\mathbb{R},\mathbb{R})\to\mathbb{R}$

```mermaid
graph LR
    D(( )) -- "6.17" --> F(["P5: 3.14"])
    E(( )) -- "0.11" --> F
    F -- "ReLU" --> G(( ))
```

Since these two perceptrons have the same arity they can be combined into the perceptron layer $\mathbf{L_3}$:

```mermaid
graph LR
    A(( )) -- "-1.3" --> C(["P4: -0.58"])
    B(( )) -- "2.28" --> C
    C -- "softplus" --> E(( ))
    A -- "6.17" --> D(["P5: 3.14"])
    B -- "0.11" --> D
    D -- "ReLU" --> F(( ))
```

So:
- $\mathbf{L_3} = \mathbf{P_4}\otimes\mathbf{P_5}$
- $\mathbf{L_3} = \lambda(P,Q)\lambda(x,y)(P(x,y),Q(x,y))(\mathbf{P_4},\mathbf{P_5})$
- $\mathbf{L_3} = \lambda(x,y)(\mathbf{P_4}(x,y),\mathbf{P_5}(x,y))$
- $\mathbf{L_3} = \lambda(x,y)(\lambda(z,w)(\mathbf{softplus}(2.28w - 1.3z -0.58))(x,y),\lambda(z,w)(\mathbf{ReLU}(6.17z + 0.11w + 3.14))(x,y))$
- $\mathbf{L_3} = \lambda(x,y)(\mathbf{softplus}(2.28y - 1.3x -0.58),\mathbf{ReLU}(6.17x + 0.11y + 3.14)) \vdash (\mathbb{R},\mathbb{R})\to(\mathbb{R},\mathbb{R})$


You can also create a binary perceptron stack with three or more binary perceptrons.

Here is a third binary perceptron $\mathbf{P_6} = $:




Note that a binary perceptron layer has two inputs and $n$ outputs, where $n$ is the number of layered perceptrons. 

### Ternary perceptron layers



----

Back to: [Index](index.md)

