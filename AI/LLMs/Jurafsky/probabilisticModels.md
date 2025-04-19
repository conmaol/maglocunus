# Probabilistic models of spelling and pronunciation

\[My notes from Chapter 5 of Jurafsky & Martin (2000)\]

Probabilistic transduction problems – input and output are boths strings of symbols:
- Detecting and correcting spelling errors.
- Modelling pronunciation variation for ASR and TTS.

## Dealing with spelling errors

An optical character recognition (OCR) system is a machine whose input is an image of a page of printed text and whose output is a string of (digital) text.

An online handwriting recognition system is a a machine whose input is a signal from a touchscreen and whose output is a string of (digital) text.

A <mark>non-word error detection</mark> system is a machine whose input is a string of characters and whose output is True if the input is a correctly spelled word of English and False otherwise.

An <mark>isolated word error correction</mark> system is a machine whose input is a string of characters and whose output is the correctly spelled word of English most closely corresponding to the input.

A <mark>context-dependent error detection and correction</mark> system is a machine whose input is a string of text and whose output is the correctly spelled sequence of English words most closely corresponding to the input, including accounting for <mark>real-word errors</mark> (eg. `three` mispelled as `there`) and <mark>homophones</mark> (eg. `dessert` mispelled as `desert`, or `piece` mispelled as `peace`).

## Spelling error patterns

80% of non-word errors are <mark>single-error</mark> mispellings:
- <mark>insertions</mark> eg. `the` mispelled as `ther`
- <mark>deletions</mark> eg. `the` mispelled as `th`
- <mark>substitutions</mark> eg. `the` mispelled as `thr`
- <mark>transpositions</mark> eg. `the` mispelled as `hte`

There are two main kinds of spelling error:
 - <mark>typographic</mark> errors are caused by clumsy keyboard usage, eg. `spell` mispelled as `speel`
 - <mark>cognitive</mark> errors are caused by lack of knowledge, eg. `separate` mispelled as `seperate`

Some error types are specific to OCR: 
- <mark>multisubstitutions</mark>, eg. `me` mispelled as `rne`, `her` mispelled as `br`
- <mark>gaps</mark>, where the OCR system is unable to decide what the letter is
- <mark>substitutions</mark> caused by visual similarity.

## Detecting non-word errors

Input: a string of characters

Output: the most likely English word corresponding to the input

foxjurnps ??

a spelling dictionary

a corpus?



## Probilistic models

## Applying the Bayesian method to spelling

input: a mispelled word (ie. not in spelling dictionary)
output: a sorted list of candidate corrections (from most to least probable)


## Minimum edit distance

## English pronunciation variation

## The Bayesian method for pronunciation

## Weighted automata

## Pronunciation in humans


----

Back up to: [Top](index.md) | [LLMs](../index.md) | [AI](../../index.md)
