# Artificial neural networks

## Cawsey (1998)

\[Notes from §7.6 of *The Essence of Artificial Intelligence* by Alison Cawsey (1998)\]

§1. The human brain consists of billions of connected <mark>neurons</mark> (simple processing units). A neuron receives input from its neighbours, and if enough input is received at the same time, the neuron will ‘fire’, sending an output to other neurons. Input channels to a neuron are called ‘dendrites’, the output channel is called the ‘axon’, and the interfaces where axons meet dendrites are called ‘synapses’, which are mediated via ‘neurotransmitters’. Emission of neurotransmitters across a synapse can be altered over time, and this is how ‘learning’ happens in the brain.

§2. One kind of artificial neuron is the simple <mark>perceptron</mark>. A perceptron has a finite number of inputs, each of which will be either 0 or 1 at any particular time (depending on whether the source perceptron has recently fired or not). Each input has a corresponding weight, between 0 and 1. If the sum of the weighted inputs at any given time is greater than some threshhold (eg. 1), then the percpetron will fire, sending a signal of 1 along all its outputs. 

§3. The simple perceptron was proposed by Frank Rosenblatt in 1962 (1958) inspired by the McCulloch-Pitts neuron (1943).

§4. An <mark>artificial neural network</mark> (ANN) consists of perceptrons connected together via weighted inputs and outputs. 

§5. ANNs can be used as <mark>inductive learners</mark> - they can be trained on example data to become classifiers, by adjusting the weights on the connections between perceptrons.

§6. A trained ANN classifier embodies <mark>subsymbolic</mark> knowledge, and is hence a ‘black box’.




----

Back up to: [Artificial intelligence](../index.md)
