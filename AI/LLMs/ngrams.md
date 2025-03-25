# N-gram language models

\[My notes from Jurafsky and Martin (2000) §6\]

§0.1. <mark>Word prediction</mark> is an essential subtask for speech recognition, handwriting recognition, augmentative communication for the disabled, and spelling error detection (especially real-word, context-sensitive spelling errors).

§0.2. An <mark>n-gram language model</mark> uses the previous $n-1$ words to predict the next one.

## Counting words in corpora

§1.1. Probabilities for the word prediction task comes from counting words in <mark>corpora</mark> – online collections of text and transcribed speech, eg.
- the Brown Corpus (1963–4) – a one million word collection of samples from 500 written texts from different genres
- the Switchboard Corpus (early 1990s) of telephone conversations (including sentence fragments and filled pauses) between strangers – 240 hours, three million words.

§1.2. Every word (token) in a corpus is an instance of a <mark>wordform</mark>, which is itself a member of a <mark>lemma</mark> – a set of lexical forms having the same stem, major part-of-speech and word-sense.

## Simple (unsmoothed) n-grams

§2.1. A <mark>language model</mark> is a computer (program) which accepts a sequence of words (and other tokens) as input and assigns a probability as output.

```mermaid
graph LR;
    input(["yesterday I saw a white rabbit"])
    model["Language Model"]
    output(["0.000453"])
    input -- input --> model
    model -- output --> output
```

### Bigrams

§2.2. A <mark>bigram</mark> language model contains/consults a look-up table which assigns, for every pair of words $w_1, w_2$ in the vocabulary, the probability of $w_2$ occurring immediately after $w_1$, ie. $P(w_2 | w_1)$.
- If there are $N$ words in the vocabulary, this table will have $N+1$ rows (representing the first word, or the start of the text) and $N$ columns (representing the second word) and hence $O(N^2)$ cells.

§2.3. The algorithm underlying the bigram language model is as follows:

```
Let OUTPUT = 1
Repeat for every bigram w1 w2 in the (tokenised) input, from left to right:
  OUTPUT = OUTPUT * P(w2|w1)
Return OUTPUT
```

§2.4. For example:
- $P(yesterday\ I\ saw\ a\ white\ rabbit) = P(yesterday|START) \cdot P(I|yesterday) \cdot P(saw|I) \cdot P(a|saw) \cdot P(white|a) \cdot P(rabbit|white)$

§2.5. A bigram language model can be ‘trained’ from a corpus as follows:

```
Repeat for every word w1 in the corpus vocabulary:
  Repeat for every word w2 in the corpus vocabulary:
    Let P(w2|w1) = |w1 w2| / |w1|
```

§2.6. For example:
- $P(rabbit|white) = \frac{|white\ rabbit|}{|white|}$

### Trigrams

§2.7. A <mark>trigram</mark> language model contains/consults a look-up table which assigns, for every triple of words $w_1, w_2, w_3$ in the vocabulary, the probability of $w_3$ occurring immediately after $w_1\ w_2$, ie. $P(w_3 | w_1\ w_2)$.
- If there are $N$ words in the vocabulary, this table will have $(N+1)^2$ rows (representing the first two words, or the start of the text) and $N$ columns (representing the third word) and hence $O(N^3)$ cells.

§2.8. The algorithm underlying the trigram language model is as follows:

```
Let OUTPUT = 1
Repeat for every trigram w1 w2 w3 in the (tokenised) input, from left to right:
  OUTPUT = OUTPUT * P(w3|w1 w2)
Return OUTPUT
```

§2.9. For example:
- $P(yesterday\ I\ saw\ a\ white\ rabbit) = P(yesterday|START\ START) \cdot P(I|START\ yesterday) \cdot P(saw|yesterday\ I) \cdot P(a|I\ saw) \cdot P(white|saw\ a) \cdot P(rabbit|a\ white)$

§2.10. A trigram language model can be ‘trained’ from a corpus as follows:

```
Repeat for every word w1 in the corpus vocabulary:
  Repeat for every word w2 in the corpus vocabulary:
    Repeat for every word w3 in the corpus vocabulary:
      Let P(w3|w1\ w2) = |w1 w2 w3| / |w1 w2|
```

§2.11. For example:
- $P(rabbit|a\ white) = \frac{|a\ white\ rabbit|}{|a\ white|}$

### Predictive n-gram language models

§2.12. A <mark>predictive language model</mark> is a computer (program) which accepts two inputs – a sequence of words and another word – and assigns a probability as output.

```mermaid
graph LR;
    input1(["yesterday I saw a white"])
    input2(["rabbit"])
    model["Predictive Language Model"]
    output(["0.00861"])
    input1 -- input-1 --> model
    input2 -- input-2 --> model
    model -- output --> output
```

§2.13. The algorithm underlying the predictive language model is as follows:

```
Let P be the probability of INPUT-1
Let Q be the probability of INPUT-1 + INPUT-2
Return Q / P
```

§2.14. Note that a predictive language model contains an n-gram language model as a component:

```mermaid
graph LR;
    input1(["yesterday I saw a white"])
    input2(["rabbit"])
    subgraph model["Predictive Language Model"]
    subgraph languagemodel["Language Model"]
       table["Look-up Table"]
    end
    end
    output(["0.00861"])
    input1 -- input-1 --> model
    input2 -- input-2 --> model
    model -- output --> output
```

Find the most likely next word(s)?

```
Let OUTPUT = []
Repeat for every word w in the vocabulary:
  OUTPUT = P(w|INPUT) + OUTPUT
Sort OUTPUT in descending order
Return OUTPUT
```



## Smoothing

## Backoff

## N-grams for spelling and pronunciation

## Entropy



----

Back up to: [LLMs](index.md) | [AI](../index.md)
