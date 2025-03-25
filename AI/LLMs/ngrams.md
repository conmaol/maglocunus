# N-grams

\[My notes from Jurafsky and Martin (2000) §6\]

§0.1. <mark>Word prediction</mark> is an essential subtask for speech recognition, handwriting, augmentative communication for the disabled, and spelling error detection (especially real-word, context-sensitive spelling errors).

§0.2. An <mark>n-gram language model</mark> uses the previous n-1 words to predict the next one.

## Counting words in corpora

§1.1. Probabilities for the word prediction task comes from counting words in <mark>corpora</mark> – online collections of text and transcribed speech, eg.
- the Brown Corpus (1963–4) – a one million word collection of samples from 500 written texts from different genres
- the Switchboard Corpus (early 1990s) of telephone conversations (including sentence fragments and filled pauses) between strangers – 240 hours, three million words.

§1.2. Every word (token) in a corpus is an instance of a <mark>wordform</mark>, which is itself an instance of a <mark>lemma</mark> – a set of lexical forms having the same stem, major part-of-speech and word sense.

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

§2.2. A <mark>bigram</mark> language model contains/consults a look-up table which assigns, for every pair of words $w_1, w_2$ in the vocabulary, the probability of $w_2$ occurring immediately after $w_1$, ie. $P(w_2 | w_1)$.
- If there are $N$ words in the vocabulary, this table will have $N+1$ rows (representing the first word, or the start of the text) and $N$ columns (representing the second word) and hence $N(N+1)$ cells.

§2.3. The algorithm underlying the bigram language model is as follows:

```
Let $output = 1
Repeat for every bigram *w_1w_2$ in the (tokenised) input, from left to right:
  output = output x P(w_2 | w_1)
Return $output
```

Training from a corpus?

Trigrams?




## Smoothing

## Backoff

## N-grams for spelling and pronunciation

## Entropy



----

Back up to: [LLMs](index.md) | [AI](../index.md)
