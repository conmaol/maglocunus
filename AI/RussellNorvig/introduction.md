# Artificial intelligence - Introduction

\[My notes from Chapter 1 of *Artificial Intelligence: A Modern Approach* by Stuart Russell and Peter Norvig (1995).\]

> AI is the study of *agents* that exist in an environment and perceive and act. [p. 1]

Contents:
- [What is AI?](#11-what-is-ai)
- [Foundations of AI](#12-the-foundations-of-artificial-intelligence)
- [History of AI](#13-the-history-of-artificial-intelligence)

AI attempts to understand, <mark>and strives to build</mark>, intelligent entities – entities (biological or electronic) which can perceive, understand, predict and manipulate a world far larger and more complicated than themselves.

AI was formally initiated as a field of study in 1956, combining:
- 2000 years of philosophical study of intelligence – seeing, learning, remembering, reasoning, <mark>rationality</mark>
- the advent of usable computers in the early 1950s – ‘electronic super-brains’ – to test out the philosophical theories

AI has **subfields** (eg. perception, logical reasoning) and specific **tasks** (eg. playing chess, proving mathematical theorems, writing poetry, diagnosing diseases).

## 1.1. What is AI?

Definitions of AI fall into two general groups:
- understanding and building entities that <mark>think</mark>
  - reasoning, minds, mental faculties, decision-making, problem-solving, learning, computations
- understanding and building entities that <mark>act (intelligently)</mark>
  - intelligent behaviour, performing functions

Orthogonal to this, definitions of AI fall into two further groups:
- understanding and building entities that are <mark>like humans</mark>
- understanding and building entities that are <mark>intelligent</mark>
  - rational – do the right thing

### Acting humanly: the Turing Test approach

The Turing Test (1950) aims to provide an **operational definition of intelligence** (or at least intelligent behaviour):

> the ability to achieve human-level performance in all cognitive tasks, sufficient to fool an interrogator

This involves the following capabilities:
- <mark>natural language processing</mark> – communicating successfully in English
- <mark>knowledge representation</mark> – storing information provided before or during the interview
- <mark>automated reasoning</mark> – using stored information to answer questions and draw new conclusions
- <mark>machine learning</mark> – adapting to new circumstances, detecting and extrapolating patterns

The **Total Turing Test** adds physical interaction to the mix (using a video signal and a hatch):
- <mark>computer vision</mark> – perceiving objects
- <mark>robotics</mark> – moving objects around

Simply trying to passing the Turing Test (as in mimicking human behaviour to fool users) has not been a huge priority in AI research, apart from when designing machines that need to interact with humans and hence need to behave according to certain established conventions of human interaction.

### Thinking humanly: the cognitive modelling approach

<mark>Cognitive science</mark> is an interdisciplinary subject area bringing together experimental techniques from psychology with computer models from AI to try to construct precise and testable theories of the workings of the human mind.

cf. Newell and Simon’s *General Problem Solver* (GPS, 1961) – a program which aimed to solve problems in the same way that humans do.

### Thinking rationally: the laws of thought approach

The <mark>logicist</mark> tradition within AI attempts to write programs that take a description of a problem in logical notation and find a solution. This builds on thousands of years of investigation into formal logic starting with Aristotle's syllogisms (laws of thought, right thinking, correct inferences).

Problems with this approach:
- It is not easy to codify informal knowledge in formal notation, especially where the knowledge is less than 100% certain.
- Writing a program than can solve problems in principle does not mean that it will be able to do so in *practice*.

### Acting rationally: the rational agent approach

<mark>AI is the study and construction of **rational agents**</mark>.
- *Agents* are entities which <mark>perceive</mark> and <mark>act</mark>.
- Acting *rationally* involves acting to achieve one’s <mark>goals</mark>, given one’s <mark>beliefs</mark>.

This definition of AI subsumes the others:
- Correct inference is part of acting rationally (i.e. reasoning logically to the conclusion that a given action will help achieve one's goals) but so is:
  - deciding what to do when no one course of action is provably correct
  - acting in a reflex action without deliberation (eg. pulling one's hand off a hot stove)
- All of the 'cognitive skills' needed to pass the Turing Test are there to allow rational agency. 
- Achieving perfect rationality (always doing the right thing) is not possible in complex environments, because the computational demands are too high. But understanding perfect decision making is a good starting point for understanding limited rationality – acting appropriately given time constraints. 

Back up to: [Top](#)

## 1.2. The foundations of Artificial Intelligence

### Philosophy (428 B.C. to present)

Plato’s *Euthyphro* dialogue has Socrates posit an *algorithm* for distinguishing ‘pious’ from ‘non-pious’ actions.

Aristotle’s system of syllogisms allows, in principle, for the *mechanical generation* of conclusions, given initial premises.

Descartes (1596–1650) proposed <mark>dualism</mark> – a part of the (human) mind (soul, spirit) is outside of nature, exempt from the laws of physics.

Leibniz (1646–1717) espoused <mark>materialism</mark> – the brain and mind operate according to physical laws, and hence are *mechanical*. The mind is a physical device operating principally by reasoning with the knowledge that it contains.

Francis Bacon (1561–1626) and John Locke (1632–1704) developed <mark>empiricism</mark> – all knowledge contained in the mind ultimately comes from sensory experience.

David Hume (1711–1776) proposed the principle of <mark>induction</mark> – general rules are acquired by exposure to repeated associations between their elements.

Bertrand Russell (1872–1970) introduced <mark>logical positivism</mark> – all knowledge can be characterised by logical theories connected to observation sentences that correspond to sensory inputs (ie. most of metaphysics is ruled out). 

What is the connection between knowledge and action?

means-end analysis

### Mathematics (c. 800 to present)

algorithm

incompleteness theorem

intractability

reduction

NP-complete

decision theory

### Psychology (1879 to present)

behaviourism

cognitive psychology

### Computer engineering (1940 to present)

### Linguistics (1957 to present)

Back up to: [Top](#)

## 1.3. The history of Artificial Intelligence

Back up to: [Top](#)



----

Back up to: [Russell and Norvig](index.md) (1995)
