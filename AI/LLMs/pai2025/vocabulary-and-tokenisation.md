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

§1.8. <mark>Out-of-vocabulary</mark> (OOV) tokens are generally represented with placeholder `<UNK>` in the input. All `<UNK>` tokens share the same embedding, which is undesirable.

§1.9. One solution to the OOV problem is to tokenise at the **character** level, with each character having its own embedding. However, this means that more tokens are needed to represent each sentence. Models like `CANINE`, `ByT5` and `Charformer` attempt to use <mark>character-based tokens</mark>.

§1.10. The middle gound is using <mark>subword tokens</mark> – the predominant way of representing vocabulary units in current LLMs.

§1.11. Current LLMs vary significantly in vocabulary size – Llama 3 has 128k token types; Gemma 2 has 256k.

§1.12. Scaling laws – the optimal vocabulary size increases as model size and compute increases. Therefore, most current models have suboptimal vocabulary sizes.

Back up to: [Top](#)

## Tokenisers

§2.1. The tokeniser is a text (pre-)processing interface between humans and the LLM:
- It is used in (pre-)pre-training to generate a vocabulary from a training corpus.
- It is used in model training and inference to break input text into sequences of valid tokens (or OOV placeholders).
- The token are then mapped to theoir token IDs, which are then fed into the LLM itself.

using the Flan-T5 LLM tokeniser:

Input: `What is 937 + 934?`

Tokens: `['_what', '_is', '_9', '37', '_+', '_9', '34', '?', '</s>']`

encoded text: `['125', '19', '668', '4118', '1768', '668', '3710', '58', '1']`

Input: `Insuffienct adoption of corduroy pants is the reaspn this economy is in the dumps!!!`

Encoded text: `['_In', 's', 'uff', 'i', 'en', 'c', 't', '_adoption', '_of', '_cord', 'u', 'roy', '_pants', '_is', '_the', '_reason', '_this', '_economy', '_is', '_in', '_the', '_dump', 's', '!!!', '</s>']`


§2.2. 

Back up to: [Top](#)

## Tokenisation pipeline

§3.1.

Back up to: [Top](#)

----

Back up to: [Top](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md)
