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

Neural networks are built out of neural units, originally inspired by biological neurons but now simply an abstract computational device.

Each neural unit multiplies input values by a weight vector, adds a bias, and then applies a non-linear activation function like sigmoid, tanh, or rectified linear unit.

bias term

vector

activation

sigmoid

tanh

ReLU (rectified linear unit)

saturated

vanishing gradient

Back up to: [Top](#)

## The XOR problem

perceptron

decision boundary

linearly separable

### The solution: neural networks

Back up to: [Top](#)

## Feedforward Neural Networks

In a fully-connected, feedforward network, each unit in layer i is connected to each unit in layer i + 1, and there are no cycles.

The power of neural networks comes from the ability of early layers to learn representations that can be utilized by later layers in the network.

Back up to: [Top](#)

## Feedforward networks for NLP: Classification

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

