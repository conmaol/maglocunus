# Tokenisation in LLMs

[Notes from Chapter 2 of *Hands-On Large Language Models* by Jay Alammar and Maarten Grootendorst (2024)]

§1. A <mark>tokeniser</mark> breaks down the input text prompt into smaller pieces/chunks – words or parts of words.
- eg. `"Have the bards who preceded"`: `"Have", "the", "bards", "who", "preceded"`
- These tokens are then turned into ‘embeddings’ – numeric representations (ie. vectors) capturing their meaning.

### How tokenisers prepare the inputs to the language model

§2. The OpenAI tokeniser is available [here](https://platform.openai.com/tokenizer).
- eg. `"Have the bards who preceded me left any theme unsung?"`
- Tokens: `"Have", " the", " b", "ards", " who", " preceded", " me", " left", " any", " theme", " uns", "ung", "?"`
- Token IDs: `[15334, 290, 287, 3098, 1218, 91138, 668, 3561, 1062, 9660, 3975, 988, 30]`

Questions:
- Why is leading whitespace preserved at the start of a token, rather than just being the default token separator?
- Why is `bards` tokenised as `" b", "ards"`, and `unsung` as `" uns", "ung"`? Surely `"bard", "s"` and `"un", "sung"` would make more sense?

### Downloading and running an LLM

## How does the tokeniser break down text?

## Word versus subword versus character versus byte tokens

## Comparing Trained LLM tokenisers

## Tokeniser properties




----

Back up to: [LLMs](index.md) | [Artificial Intelligence](../index.md)
