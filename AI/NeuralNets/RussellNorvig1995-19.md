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

§1.7. Therefore, brains are faster than computers at what they do.

§1.8. Brains are more <mark>fault tolerant</mark> than computers.

§1.9. Perhaps, artificial neural networks offer a way of building a massively parallel computer, which is more fault tolerant, has <mark>graceful degradation</mark> (performance drops off gradually rather than sharply as conditions worsen), and can do <mark>inductive learning</mark> from input/output pairs.

Back up to: [Top](#)

## Neural networks

§2.1. A neural network is composed of nodes/units connected by (numerically) weighted links:
- The weights are the primary means of long-term storage.
- Learning usually involves updating the weights.
- Input and output units are connected to the external environment.
- The weights are modified to bring the network’s input/output behaviour more into line with that of the environment producing the inputs.

§2.2. In theory, each unit does a <mark>local computation</mark> based on inputs from its neighbours, without the need for any global control.
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
- a <mark>sigmoid function</mark> – Output is **between** 0 and 1 depending on how close the weighted input is to the threshold.

§2.7. In most cases, it is mathematically convenient to replace the threshold with an extra input weight.

### Network structures

§2.8. The main distinction is between <mark>feed-forward</mark> networks and <mark>recurrent</mark> networks.

§2.9. In a <mark>feed-forward network</mark>, links are unidirectional and there are no cycles (ie. they are directed acyclic graphs).

§2.10. In a <mark>layered</mark> feed-forward network, each unit is linked only to units in the next layer – no links between units in the same layer, no links backward to a previous layer, and no links that skip a layer. Computation proceeds uniformly from input units to output units. 

§2.11. Feed-forward networks are relatively well-understood. They simply compute a function of the input values that depends on the weight settings – they have no internal state other than the weights themselves.

§2.12. In a <mark>recurrent network</mark>, links can form arbitrary topologies. Activation can be fed back to the units which caused it, and hence recurrent networks have internal state stored in the activation levels of the units. Computation is much less orderly, and recurrent networks can become unstable and exhibit chaotic behaviour, though they can be implement more complex agent designs.

§2.13. The brain is a recurrent network, since we have short-term memories.

§2.14. <mark>Hopfield networks</mark> are a kind of recurrent network – all connections are bidirectional with symmetric weights; all units are both input and output units; the activation function is signed; and activation levels are either +1 or -1. A Hopfield network functions as an <mark>associative memory</mark>.

§2.15. <mark>Boltzman machines</mark> are another kind of recurrent network, with hidden units and a stochastic activation function.

§2.16. <mark>Perceptrons</mark> are feed-forward networks with no hidden units. <mark>Multi-layer</mark> feed-forward networks have at least one layer of hidden units.

§2.17. A multi-layer network with **one** (sufficiently large) layer of hidden units can compute **any continuous function** of the inputs. 

§2.18. A multi-layer network with **two** (sufficiently large) layer of hidden units can compute **any function** of the inputs, including discontinuous functions. 

§2.19. From the viewpoint of statistics, neural networks perform <mark>nonlinear regression</mark> – they learn by tuning the parameters (weights) to fit the data in the training set.

### Optimal network structure

§2.20. If a neural network is too small, then it will not be able to learn to compute the desired function. If it is too large, then it may be subject to <mark>overfitting</mark> – it will just memorise all the examples and hence be unable to generalise sufficiently to classify unseen examples.

§2.21. Finding the right size of network can be thought of as a **search** problem.

§2.22. One approach is <mark>optimal brain damage</mark> – start with a fully connected network and then keep dropping connections (and units) and retraining, until the network breaks.

§2.23. In contrast, the tiling algorithm starts with a single unit and then keeps adding new units and retraining, until the desired function has been ‘learned’.

Back up to: [Top](#)

## Perceptrons

§3.1. A single-layer feed-forward network is nowadays known as a ‘perceptron’. These were the only neural networks which could be effectively trained during the 1950s and 1960s.

### What perceptrons can represent

§3.2. A perceptron can represent simple Boolean functions like AND, OR and NOT. It can also represent some complex Boolean functions like the ‘majority function’ (which outputs 1 if more than half of the inputs are 1).

§3.3. However, there are limits to the complexity of the Boolean functions a perceptron can represent. It can only represent functions which are <mark>linearly separable</mark>. For example, a perceptron cannot represent the XOR function.

### Learning linearly separable functions

§3.4. There is a perceptron algorithm that will learn any linearly separable function, given enough training examples – the <mark>perceptron learning rule</mark> proposed by Frank Rosenblatt (1960).

§3.5. Rosenblatt proved the <mark>perceptron convergence theorem</mark> – a learning system using the perceptron learning rule will converge to a set of weights that correctly represents the examples, as long as the examples represent a linearly separable function.

§3.6. However, Minsky & Papert’s book *Perceptrons* (1968) demonstrated the limits of linearly separable functions, dashing hopes that intelligent machines could be built from perceptrons. 

Back up to: [Top](#)

## Multilayer feed-forward networks

§4.1. Developing a learning algorithm to train a multi-layer feed-forward network was more difficult than for a perceptron network, because of having to find a way to update the weights between the input and the hidden units. Such learning algorithms are neither efficient nor guaranteed to converge to a global optimum. However, we know anyway from computational learning theory that <mark>learning general functions from examples is an intractable problem in the worst case</mark>.

§4.2. Back-propagation is the most popular method for learning in multi-layer networks, invented in 1969 by Bryson and Ho, but ignored till the mid-1980s (because of sociological reasons and computational requirements).

### Back-propagation learning

§4.3. Learning in a multi-layer network proceeds the same way as for perceptrons: example inputs are presented to the network, and if the network computes an output vector that matches the target then nothing is done. If there is an error, then the weights are adjusted to reduce this error.

§4.4. The trick with back-propagation is to asses the blame for the error and divide it among all the contributing weights.

### Back-propagation as gradient descent search

§4.5. Back-propagation provides a way of dividing the calculation of the gradient among the units, so that the change in each weight can be calculated by the unit to which the weight is attached, using only local information.

§4.6. This decomposition of the learning algorithm is a major step towards parallelisable and biologically plausible learning mechanisms.

### Discussion

§4.7. Neural networks do not have the expressive power of general logical representations (eg. decision trees), but they are better-suited for continuous inputs and outputs. However, designing a good topology is a black art.

§4.8. Neural networks do a good job of generalisation (for the functions for which they are well-suited). They have had reasonable success in a number of real-world problems.

§4.9. Neural networks are very tolerant of noise in the input data (because they are essentially doing non-linear regression).

§4.10. Neural networks are essentially ‘black boxes’. Even if a network does a good job of predicting new cases, many users will still be dissatisfied because they will have no idea *why* a given output value is reasonable.

§4.11. Because of the lack of transparency, it is quite hard to use expert knowledge to ‘prime’ a network to learn better.

Back up to: [Top](#)

## Applications of neural networks

§5.1. John Denker: <mark>“Neural networks are the second best way of doing just about anything.”</mark>

§5.2. Neural networks provide passable performance on many tasks that would be difficult to solve explicitly with other programming techniques, given enough thought and trial-and-error experimentation on the part of the network designer.

### Pronunciation

§5.3. <mark>NETtalk</mark> (Sejnowski & Rosenberg 1987) is a neural network that maps written text to sequences of phonemes.

§5.4. The input consists of the character to be pronounced, along with the preceding and following three characters (seven inputs in total).

§5.5. This input corresponds in reality to 7x29 input units, since each character can either be one of the 26 alphabetic characters, a space, a full stop, or another punctuation character. In addition, there are 80 hidden units.

§5.6. The output layer consists of phonological features of the sound to be produced – high vs. low, voiced vs. unvoiced, etc. The output can also be nothing, eg. for the second letter in a digraph.

§5.7. The network was trained on a hand-transcribed 1024-word text.

§5.8. After 50 passes through the training data (epochs), the network performed at 95% accuracy on the training data itself, and at 75% accuracy on test data. This is not spectacular when compared to other methods, eg. Markov models.

### Handwritten character recognition

§5.9. Le Cun et al 1989 built a neural network to read zipcodes on hand-addressed envelopes.

§5.10. A preprocessor locates and segments the individual handwritten zipcode digits, and converts each one into 16x16 array of pixels.

§5.11. As well as the input layer of 16x16 units, there are:
- an output layer of 10 units, one for each digit 
- three hidden layers of 768, 192, and 30 units respectively (optimised to 12 groups of 64 units using ‘feature detectors’, the number of weights was reduced from 200k to 9760 by clever design)

§5.12. There were 7300 examples in the training set, and 2000 examples in the test set. Accuracy was 99% once marginal cases were eliminated using a confusion threshold.

### Driving

§5.13. ALVINN (Autonomous Land Vehicle in a Neural Network – Pomerleau 1993) learned to steer a vehicle along a single vehicle on a highway by observing the performance of a human driver.

§5.14. The vehicle has a color video camera whose sigmal is preprocessed into a 30x32 grid of input units. There are 30 output units, each corresponding to a steering direction. There is also a hidden layer of five units that is fully connected to the input and output layers.

§5.15. Training data is a set of image/direction pairs generated by recording the actions of a human driver for five minutes.

§5.16. After ten minutes of back-propagation training, ALVINN can drive at 70mph for 90 miles on a public highway, and drive at normal speeds on single-lane dirt roads, paved bike paths and two-lane suburban streets.

§5.17. However, ALVINN cannot drive on a road type for which it has not been trained, and is not robust with respect to changes in lighting conditions or the presence of other vehicles.

§5.18. The MANIAC system (Jochem et al 1993) incorporates multiple ALVINN subnets trained for a particular type of road, and hence has better general performance.

§5.19. Neural nets are a better choice for this kind of task than decision trees, because they can make decisions much faster (as pure ‘reflex agents’), and deal with noise better (in the absence of a ‘theory of driving’).

§5.20. Current (1995!) research in this area is looking at building hybrid systems, combining ALVINN’s low-level (sub-symbolic) expertise with higher-level symbolic knowledge.

Back up to: [Top](#)

## Bayesian methods for learning belief networks

### Bayesian learning

### Belief network learning problems

### Learning networks with fixed structure

### A comparison of belief networks and neural networks

Back up to: [Top](#)

----

Back up to: [Neural networks](index.md) | [Artificial intelligence](../index.md)
