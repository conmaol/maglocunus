# Probabilistic models of spelling and pronunciation

\[My notes from Chapter 5 of Jurafsky & Martin (2000)\]

Detecting and correcting spelling errors

Modelling pronunciatio variation for ASR and TTS.

Probabilistic transduction - input and output are boths strings of symbols

phonemes to letters (surface phones to lexical phones?)

misspelled words to correctly spelled words

## Dealing with spelling errors

OCR

online handwriting recognition

- non-word error detection eg.graffe
- isolated word error correction
- contecxt-dependent error detection and correction (including real-word errors – three - there, homophones – dessert/desert, piece/peace)


## Spelling error patterns

80% of non-word errors are single-error mispellings
- insertion ther
- deletion th
- substitution the
- transposition hte

 Two types of error:
 - typographic - related to the keyboard (spell - speel)
 - cognitive - seperate

OCR errors include: multisubstitutions (m/rn, he/b); gaps where system can't guess the letter; substitutions caused by visual similarity.



## Detecting non-word errors

foxjurnps

spelling dictionaries


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
