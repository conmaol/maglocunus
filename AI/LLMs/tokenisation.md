# Tokenisation in LLMs

[Notes from Chapter 2 of *Hands-On Large Language Models* by Jay Alammar and Maarten Grootendorst (2024)]

§1. A <mark>tokeniser</mark> breaks down the input text prompt into smaller pieces/chunks – words or parts of words.
- eg. `"Have the bards who preceded"`: `"Have", "the", "bards", "who", "preceded"`
- These tokens are then turned into ‘embeddings’ – numeric representations (ie. vectors) capturing their meaning.

### How tokenisers prepare the inputs to the language model

§2. The OpenAI GPT-4 tokeniser is available [here](https://platform.openai.com/tokenizer):
- eg. `"Have the bards who preceded me left any theme unsung?"`
- Tokens: `"Have", " the", " b", "ards", " who", " preceded", " me", " left", " any", " theme", " uns", "ung", "?"`
- Token IDs: `[15334, 290, 287, 3098, 1218, 91138, 668, 3561, 1062, 9660, 3975, 988, 30]`

Questions:
- Why is leading whitespace preserved at the start of a token, rather than just being the default token separator?
- Why is `bards` tokenised as `" b", "ards"`, and `unsung` as `" uns", "ung"`? Surely `"bard", "s"` and `"un", "sung"` would make more sense?

### Downloading and running an LLM

§3. Here is an example using the Microsoft Phi-3-mini-4k LLM tokeniser:
- Prompt: `Write an email apologizing to Sarah for the tragic gardening mishap. Explain how it happened.`
- Tokens: `"<s>", "Write", "an", "email", "apolog", "izing", "to", "Sarah", "for", "the", "trag", "ic", "garden", "ing", "m", "ish", "ap", ".", "Exp", "lain", "how", "it", "happened", ".", "<|assistant|>"`
- Token IDs: `[1, 14350, 385, 4876, 27746, 5281, ...]`

Notes:
- The tokenised output <mark>special tokens</mark> – `<s>` (beginning of the text), `<|assistant|>`.
- Spaces appear to be token separators.
- Punctuation markers are separate tokens.
- Words are broken up inconsistently – `garden ing`, `apolog izing`, `trag ic`, `m ish ap`, `Exp lain`, `happened`.
- Suffix tokens have a special hidden character at the beginning. 

### How does the tokeniser break down text?

§4. A tokeniser uses a specific tokenisation method, eg.
- <mark>byte-pair encoding</mark> – BPE – used by GPT LLMs
- <mark>Wordpiece</mark> – used by BERT

§5. A tokeniser knows a finite vocabulary of tokens, some of which may be special tokens.

§6. A tokeniser needs to be trained on a specific dataset, eg. English text, code, multilingual text.
- <mark>What does ‘training’ mean here?</mark>
- <mark>Isn’t a tokeniser left-to-right deterministic?</mark>

### Word versus subword versus character versus byte tokens

## Comparing Trained LLM tokenisers

## Tokeniser properties




----

Back up to: [LLMs](index.md) | [Artificial Intelligence](../index.md)
