# 19. Learning in neural and belief networks

\[Notes from §19 of *Artificial Intelligence: A Modern Approach* by Stuart Russell and Peter Norvig (1995)\]

Contents:
- [How the brain works](#how-the-brain-works)
- [Neural networks](#neural-networks)
- [Perceptrons](#perceptrons)
- [Multilayer feed-forward networks](#multilayer-feed-forward-networks)
- [Applications of neural networks](#applications-of-neural-networks)
- [Bayesian methods for learning belief networks](#bayesian-methods-for-learning-belief-networks)

§0.1. A neural network is a network of simple arithmetic computing elements that represents a function (just as circuits of simple logic gates represent Boolean functions). Neural networks are “particularly useful for complex functions with continuous-valued outputs and large numbers of noisy inputs”.

§0.2. Other names for neural networks are: connectionism, parallel distributed processing, neural computation, adaptive networks, collective computation.

## How the brain works

§1.1. Brains consist of neurons. Neurons have a soma, dendrites, and an axon. Axons transmit an action potential to synapses. Synapses can be excitatory or inhibitatory.

§1.2. “Synaptic connections exhibit <mark>plasticity</mark> – long-term changes in the strength of the connections in response to the pattern of stimulation. Neurons also form new connections with other neurons, and sometimes entire collections of neurons can migrate from one place to another. These mechanisms are thought to form the basis for learning in the brain.”

§1.3. It is known that certain areas of the brain have specific *functions*:
- Pierre Paul <mark>Broca</mark> (1861) demonstrated that the third left frontal convolution of the cerebral cortex is important for speech and language (cf. aphasia).

§1.4. Brains cause minds! The only alternative theory is mysticism.

### Comparing brains with digital computers

§1.5. Computers have a much higher ‘switching speed’ (time to execute instructions) than do brains (nanoseconds versus milliseconds).

§1.6. However, brains are <mark>massively parallel</mark>, whereas computer hardware is serial.

§1.7. Therefore, brain are faster than computers at what they do.

§1.8. Brains are more <mark>fault tolerant</mark> than computers.

§1.9. Perhaps, artificial neural networks offer a way of building a massively parallel computer, which is more fault tolerant, has <mark>graceful degradation</mark> (performance drops off gradually rather than sharply as conditions worsen), and can do <mark>inductive learning</mark> from input/output pairs.

Back up to: [Top](#)

## Neural networks

§2.1. A neural network is composed of nodes/units connected by (numerically) weighted links:
- The weights are the primary means of long-term storage.
- Learning usually involved updating the weights.
- Input and output units are connected to the external environment.
- The weights are modified to bring the network’s input/output behaviour more into line with that of the environment producing the inputs.

§2.2. In theory, each unit does a local computation based on inputs from its neighbours, without the need for any global control.
- In practice, neural networks are implemented in software and hence use synchronous control to update all the units in a fixed sequence.

§2.3. To build a neural network for a task:
- decide how many units to use
- decide what kind of units to use
- decide how the units should be connected
- initialise the weights
- train the weights using a learning algorithm applied to a set of training examples for the task.

### Simple computing elements

§2.4. A unit receives signals from its input links and computes a new <mark>activation level</mark> which it sends along each of its output links.

§2.5. The activation level is computed by applying a (non-linear) <mark>activation function</mark> to the <mark>weighted sum</mark> of the input signals.

§2.6. The three most common choices of activation function are:
- a <mark>step function</mark> – Output is 0 or 1 depending on whether or not the weighted input is below or above the threshold.
- a <mark>sign function</mark> – Output is -1 or 1 depending on whether or not the weighted input is below or above the threshold.
- a <mark>sigmoid function</mark> – Output is between 0 and 1 depending on how close the weighted input is to the threshold.

§2.7. In most cases, it is mathematically convenient to replace the threshold with an extra input weight.

### Network structures

§2.8. The main distinction is between <mark>feed-forward</mark> networks and <mark>recurrent</mark> networks.

§2.9. In a <mark>feed-forward network</mark>, links are unidirectional and there are no cycles (ie. they are directed acyclic graphs).

§2.10. In a <mark>layered</mark> feed-forward network, each unit is layered only to units in the next layer – no links between units in the same layer, no links backward to a previous layer, and no links that skip a layer. Computation proceeds uniformly from input units to output units. 

§2.11. Feed-forward networks are relatively well-understood. They simply compute a function of the input values that depends on the weight settings – they have no internal state other than the weights themselves.

§2.12. In a <mark>recurrent network</mark>, links can form arbitrary topologies. Activation can be fed back to the units which caused it, and hence recurrent networks have internal state stored in the activation levels of the units. Computation is much less orderly, and recurrent networks can become unstable and exhibit chaotic behaviour, though they can be implement more complex agent designs.

§2.13. The brain is a recurrent network, since we have short-term memories.

§2.14. <mark>Hopfield</mark> networks are a kind of recurrent network ...

§2.15. <mark>Boltzman machines</mark> are another kind of recurrent network ...

§2.16. Perceptrons versus multi-layer networks.


### Optimal network structure

Back up to: [Top](#)

## Perceptrons

### What perceptrons can represent

### Learning linearly separable functions

Back up to: [Top](#)

## Multilayer feed-forward networks

### Back-propagation learning

### Back-propagation as gradient descent search

### Discussion

Back up to: [Top](#)

## Applications of neural networks

### Pronunciation

### Handwritten character recognition

### Driving

Back up to: [Top](#)

## Bayesian methods for learning belief networks

### Bayesian learning

### Belief network learning problems

### Learning networks with fixed structure

### A comparison of belief networks and neural networks

Back up to: [Top](#)

----

Back up to: [Neural networks](index.md) | [Artificial intelligence](../index.md)
