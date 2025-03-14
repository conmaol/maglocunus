# Neural networks

\[Notes from [§7](https://web.stanford.edu/~jurafsky/slp3/7.pdf) of *Speech and Language Processing* by Daniel Jurafsky & James H. Martin (2025)\]

Contents:
- [Units](#units)
- [The XOR problem](#the-xor-problem)
- [Feedforward Neural Networks](#feedforward-neural-networks)
- [Feedforward networks for NLP: Classification](#feedforward-networks-for-nlp-classification)
- [Training Neural Nets](#training-neural-nets)
- [Feedforward Neural Language Modeling](#feedforward-neural-language-modeling)
- [Training the neural language model](#training-the-neural-language-model)

§0.1. A modern neural network is a network of small computing units, each of which takes a vector of input values and produces a single output value. These are typically <mark>feedforward</mark> networks in that the computation proceeds iteratively from one layer of units to the next. 

§0.2. The use of modern neural nets is often called <mark>deep learning</mark>, because modern networks are often deep (have many layers).

§0.3. Neural networks share much of the same mathematics as <mark>logistic regression</mark>. However they are a more powerful classifier than logistic regression – a minimal neural network (technically one with a single ‘hidden layer’) can be shown to learn any function.

§0.4. Unlike with regression classifiers, working with neural networks typically avoids having to develop rich hand-derived features based on domain knowledge for different tasks. We build neural networks that take raw words as inputs and learn to induce features as part of the process of learning to classify. Deep neural nets are the right tool for tasks that offer sufficient data to learn features automatically.

## Units

§1.1. The building block of a neural network is a <mark>single computational unit</mark>. A unit takes a set of real valued numbers as input, performs some computation on them, and produces an output. Neural networks are built out of neural units, originally inspired by biological neurons but now simply an abstract computational device.

§1.2. At its heart, a neural unit is taking a <mark>weighted sum</mark> of its inputs, with one additional term in the sum called a <mark>bias term</mark>. 

§1.3. Each neural unit multiplies input values by a weight vector, adds the bias, and then applies a non-linear activation function like: <mark>sigmoid</mark> (squashing outliers toward $0$ or $1$); <mark>tanh</mark> (a variant of the sigmoid that ranges from $-1$ to $+1$); or rectified linear unit (<mark>ReLU</mark> – the most commonly used, the same as the weighted sum $z$ when $z$ is positive, and $0$ otherwise).

§1.4. These activation functions have different properties that make them useful for different language applications or network architectures.

Back up to: [Top](#)

## The XOR problem

§2.1. The power of neural networks, as with the real neurons that inspired them, comes from combining the computational units into larger networks.

§2.2. Minsky and Papert (1969) proved that a single neural unit (or a single layer of units) cannot compute some very simple functions of its input (eg. XOR), therefore we need <mark>multi-layer networks</mark>. 

§2.3. A <mark>perceptron</mark> is a very simple neural unit that has a binary output ($0$ or $1$) and has a very simple step function as its non-linear activation function.

§2.4. A perceptron is a linear classifier. The line acts as a <mark>decision boundary</mark> in two-dimensional space in which the output $0$ is assigned to all inputs lying on one side of the line, and the output $1$ to all input points lying on the other side of the line. XOR is not a <mark>linearly separable</mark> function (unlike AND and OR). 

### The solution: neural networks

§2.5. While the XOR function cannot be calculated by a single perceptron, it can be calculated by a <mark>layered network</mark> of perceptron units. 

§2.6. The <mark>hidden</mark> layer(s) will learn to form useful representations using back-propagation – one of the key advantages of neural networks,

Back up to: [Top](#)

## Feedforward Neural Networks

§3.1. In a fully-connected, feedforward network, each unit in layer i is connected to each unit in layer i + 1, and there are no cycles. The power of neural networks comes from the ability of early layers to learn representations that can be utilized by later layers in the network.

§3.2. A feedforward network (the simplest kind of neural network) is a multilayer network in which the units are connected with no cycles – the outputs from units in each layer are passed to units in the next higher layer, and no outputs are passed back to lower layers (ie. the network is non-recurrent). 

§3.3. Simple feedforward networks have three kinds of nodes: input units, hidden units, and output units. In the <mark>standard architecture</mark>, each layer is fully-connected, meaning that each unit in each layer takes as input the outputs from all the units in the previous layer, and there is a link between every pair of units from two adjacent layers.

§3.4. If we are doing a <mark>binary classification task</mark> like sentiment classification, we might have a single output node, and its scalar value is the probability of positive versus negative sentiment. 

§3.5. If we are doing <mark>multinomial classification</mark>, such as assigning a part-of-speech tag, we might have one output node for each potential part-of-speech, whose output value is the probability of that part-of-speech, and the values of all the output nodes must sum to one. 

§3.6. A neural network is like multinomial logistic regression, but (a) with many layers, since a deep neural network is like layer after layer of logistic regression classifiers; (b) with those intermediate layers having many possible activation functions (tanh, ReLU, sigmoid) instead of just sigmoid; and (c) rather than forming the features by feature templates, the prior layers of the network induce the feature representations themselves.

Back up to: [Top](#)

## Feedforward networks for NLP: Classification

§4.1. 

Back up to: [Top](#)

## Training Neural Nets

Neural networks are trained by optimization algorithms like gradient descent.

Error backpropagation, backward differentiation on a computation graph, is used to compute the gradients of the loss function for a network.

Back up to: [Top](#)

## Feedforward Neural Language Modeling

Neural language models use a neural network as a probabilistic classifier, to compute the probability of the next word given the previous n words.

Back up to: [Top](#)

## Training the neural language model

Neural language models can use pretrained embeddings, or can learn embed- dings from scratch in the process of language modeling.

• 
• 
• 


Back up to: [Top](#)

----

Back up to: [Neural networks](index.md) | [Artificial intelligence](../index.md)

