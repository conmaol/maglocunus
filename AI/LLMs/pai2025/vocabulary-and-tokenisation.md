# Designing LLM Applications – Vocabulary and tokenisation

Contents:
- [Vocabulary](#vocabulary)
- [Tokenisers](#tokenisers)
- [Tokenisation pipeline](#tokenisation-pipeline)

## Vocabulary

§1.1. LLM vocabulary sizes range from 5k to 500k tokens. 

§1.2. The `GPT-NeoX-20B` LLM has just above 50k distinct tokens in its vocabulary. Many of these are <mark>sub-word</mark> tokens like `impl`, `inated`. In this LLM, tokens are case sensitive, and a `Ġ` at the start of a token indicates a preceding space.

§1.3. Every token in the vocabulary has an (unsigned) integer as its <mark>token index</mark> (or ‘input ID’), eg.
- `Ġoffice: 3906`
- `ĠOffice: 7454`

§1.4. LLMs learn vector representations called <mark>embeddings</mark> for each of the tokens in their vocabulary, that reflect their syntactic and semantic meanings.

§1.5. Cased vocabularies are almost always better, given enough training data to learn distinctive representations for uppercase and lowercase tokens.

§1.6. Some but not all **numbers** get their own tokens. Popular **names** (including placenames) get their own tokens.

§1.7. There are often tokens for programming language strings like `]);`.

How are vocabularies determined?

Back up to: [Top](#)

## Tokenisers

§2.1.

Back up to: [Top](#)

## Tokenisation pipeline

§3.1.

Back up to: [Top](#)

----

Back up to: [Top](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md)
