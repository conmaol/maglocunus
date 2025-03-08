# Artificial neural networks

## Cawsey (1998)

\[Notes from §7.6 of *The Essence of Artificial Intelligence* by Alison Cawsey (1998)\]

§1. The human brain consists of billions of connected <mark>neurons</mark> (simple processing units). A neuron receives input from its neighbours, and if enough input is received at the same time, the neuron will ‘fire’, sending an output to other neurons. Input channels to a neuron are called ‘dendrites’, the output channel is called the ‘axon’, and the interfaces where axons meet dendrites are called ‘synapses’, which are mediated via ‘neurotransmitters’. Emission of neurotransmitters across a synapse can be altered over time, and this is how ‘learning’ happens in the brain.

§2. One kind of artificial neuron is the simple <mark>perceptron</mark>. A perceptron has a finite number of inputs, each of which will be either 0 or 1 at any particular time (depending on whether the source perceptron has recently fired or not). Each input has a corresponding weight, between 0 and 1. If the sum of the weighted inputs at any given time is greater than some threshhold (eg. 1), then the perceptron will fire, sending a signal of 1 along all its outputs. 

§3. The simple perceptron was proposed by Frank Rosenblatt in 1962 (1958) inspired by the McCulloch-Pitts neuron (1943).

§4. An <mark>artificial neural network</mark> (ANN) consists of perceptrons connected together via weighted inputs and outputs. 

§5. ANNs can be used as <mark>inductive learners</mark> - they can be trained on example data to become classifiers, by adjusting the weights on the connections between perceptrons.

§6. Here is some example data to train a simple classifier:
- Richard got a first last year, is male, doesn’t work hard, and drinks a lot; and he **didn’t** get a first this year.
- Alan got a first last year, is male, works hard, and doesn’t drink a lot; and he **did** get a first this year.
- Alison didn’t get a first last year, is not male, works hard, and doesn’t drink a lot; and she **didn’t** get a first this year.
- Jeff didn’t get a first last year, is male, doesn’t work hard, and drinks a lot; and he **didn’t** get a first this year.
- Gail got a first last year, is not male, works hard, and drinks a lot; and she **did** get a first this year.
- Simon didn’t get a first last year, is male, works hard, and drinks a lot; and he **didn’t** get a first this year.

§7. Here is a simple one-perceptron network that can be trained as a classifier for this example data:

```mermaid



```


:
- if the actual output is 0 but the target output is 1, then the weights on active inputs are increased by a small amount
- if the actual output is 1 but the target output is 0, then the weights on active inputs are decreased by a small amount

§6. A trained ANN classifier embodies <mark>subsymbolic</mark> knowledge, and is hence a ‘black box’.




There are many other kinds of ANN, other than those based on perceptrons.


----

Back up to: [Artificial intelligence](../index.md)
