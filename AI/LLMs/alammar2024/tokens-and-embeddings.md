# Tokens and embeddings

[Notes from Chapter 2 of *Hands-On Large Language Models* by Jay Alammar and Maarten Grootendorst (2024)]

Contents:
- [LLM tokenisation](#llm-tokenisation)
  - [How tokenisers prepare the inputs to the language model](#how-tokenisers-prepare-the-inputs-to-the-language-model)
  - [Downloading and running an LLM](#downloading-and-running-an-llm)
  - [How does the tokeniser break down text?](#how-does-the-tokeniser-break-down-text)
  - [Word versus subword versus character versus byte tokens](#word-versus-subword-versus-character-versus-byte-tokens)
  - [Comparing Trained LLM tokenisers](#comparing-trained-llm-tokenisers)
  - [Tokeniser properties](#tokeniser-properties)
- Token embeddings
- Text embeddings (for sentences and whole documents)
- Word embeddings beyond LLMs
- Embeddings for recommendation systems

## LLM tokenisation

§1.1. A <mark>tokeniser</mark> breaks down the input text prompt into smaller pieces/chunks – words or parts of words.
- eg. `"Have the bards who preceded"`: `"Have", "the", "bards", "who", "preceded"`
- These tokens are then converted into ‘embeddings’ – numeric representations (ie. vectors) capturing their meaning.

### How tokenisers prepare the inputs to the language model

§1.2. The OpenAI GPT-4 tokeniser is available [here](https://platform.openai.com/tokenizer):
- Example input: `"Have the bards who preceded me left any theme unsung?"`
- Tokens: `"Have", " the", " b", "ards", " who", " preceded", " me", " left", " any", " theme", " uns", "ung", "?"`
- Token IDs: `[15334, 290, 287, 3098, 1218, 91138, 668, 3561, 1062, 9660, 3975, 988, 30]`

> Questions:
> - Why is leading whitespace preserved at the start of a token, rather than just being the default token separator?
> - Why is `bards` tokenised as `" b", "ards"`, and `unsung` as `" uns", "ung"`? Surely `"bard", "s"` and `"un", "sung"` would make more sense?

Back up to: [Top](#)

### Downloading and running an LLM

§1.3. Here is an example using the Microsoft Phi-3-mini-4k LLM tokeniser:
- Prompt: `Write an email apologizing to Sarah for the tragic gardening mishap. Explain how it happened.`
- Tokens: `"<s>", "Write", "an", "email", "apolog", "izing", "to", "Sarah", "for", "the", "trag", "ic", "garden", "ing", "m", "ish", "ap", ".", "Exp", "lain", "how", "it", "happened", ".", "<|assistant|>"`
- Token IDs: `[1, 14350, 385, 4876, 27746, 5281, ...]`

Notes:
- The tokenised output <mark>special tokens</mark> – `<s>` (beginning of the text), `<|assistant|>`.
- Spaces appear to be token separators.
- Punctuation markers are separate tokens.
- Words are broken up inconsistently – `garden ing`, `apolog izing`, `trag ic`, `m ish ap`, `Exp lain`, `happened`.
- Suffix tokens have a special hidden character at the beginning.
- The tokeniser contains (and consults) a <mark>table</mark> containing all the tokens it knows with their token IDs. 

Back up to: [Top](#)

### How does the tokeniser break down text?

§1.4. A tokeniser uses a specific <mark>tokenisation method</mark>, eg.
- **byte-pair encoding** – BPE – used by GPT LLMs
- **Wordpiece** – used by BERT

§1.5. A tokeniser has two important parameters:
- the <mark>vocabulary size</mark>
- the <mark>special tokens</mark>.

§1.6. A tokeniser then needs to be <mark>trained</mark> on a specific dataset, eg. English text, code, multilingual text.
- Given a specific tokenisation method, vocabulary size and special character set, what is the most efficient vocabulary of tokens? 

> Questions:
> - Is a tokeniser not just left-to-right deterministic?

Back up to: [Top](#)

### Word versus subword versus character versus byte tokens

§1.7. An early LLM tokenisation scheme/approach involved (whole) <mark>word tokens</mark>, as used in `word2vec` for example. This approach is used less and less because:
- It is unable to deal with new words that were not in its training set.
- It leads to lots of tokens with minimal differences between them, eg. `apology`, `apologise`, `apologetic`, `apologist`.

§1.8. Using <mark>subword tokens</mark> can solve these problem (to an extent), with distinct tokens for stems (eg. `apolog`) and suffixes (eg. `-y`, `-ise`, `-etic`, `-ist`).

§1.9. <mark>Character tokens</mark> probably take this too far – it can make modelling more difficult than subword tokens, and uses the LLM context length/window less efficiently.

§1.10. Using <mark>byte tokens</mark> allows for ‘tokenisation-free’ encoding, which can be useful in multilingual scenarios:
- [CANINE: Pre-training an efficient tokenization-free encoder for language representation](https://arxiv.org/pdf/2103.06874)
- [ByT5: Towards a token-free future with pre-trained byte-to-byte models](https://arxiv.org/pdf/2105.13626)

§1.11. Some subword tokenisers can <mark>fall back</mark> to byte tokens when needed, eg. GPT-2 and RoBERTa.

Back up to: [Top](#)

### Comparing Trained LLM tokenisers

§1.12. **BERT base model (uncased)** (2018):
- Method: [Wordpiece](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/37842.pdf)
- Vocabulary size: 30,522 tokens
- Special tokens: `unk_token [UNK]`, `sep_token [SEP]`, `pad_token [PAD]`, `cls_token [CLS]` (classification), `mask_token [MASK]`
- Vertical whitespace is omitted/lost.
- Uppercase letters are normalised to lowercase.
- Suffix tokens are preceded by `##`.
- Emoji and Chinese characters are `[UNK]`.
- `[CLS]` utility token at start of input, `[SEP]` at end.

§1.13. **BERT base model (cased)** (2018)
- Method: Wordpiece
- Vocabulary size: 28,966 tokens

§1.14. **GPT-2** (2019)
- Method: [BPE](https://arxiv.org/pdf/1508.07909)
- Vocabulary size: 50,257 tokens
- Special tokens: `<|endoftext|>`
- Sensitive to case.
- Subword tokens.
- Vertical and horizontal whitespace is retained (hence good for dealing with code).
- Emoji and non-Roman characters are represented as a sequence of byte symbols, and can be recreated in the output.

§1.15. **Flan-T5** (2022)
- Method: [SentencePiece](https://arxiv.org/pdf/1808.06226), [supporting](https://arxiv.org/pdf/1804.10959) BPE and the unigram language model
- Vocabulary size: 32,100 tokens
- Special tokens: `unk_token <unk>`, `pad_token <pad>`
- Sensitive to case.
- Subword tokens.
- Whitespace is collapsed/lost.
- Blind to non-Roman characters.

§1.16. **GPT-4** (2023)
- Method: BPE
- Vocabulary size: > 100,000 tokens
- Special tokens: `<|endoftext|>`, [fill in the middle tokens](https://arxiv.org/pdf/2207.14255): `<|fim_prefix|>`, `<|fim_middle|>`, `<|fim_suffix|>`,
- Specific tokens for all combinations of whitespace, and for common coding keywords (eg. `elif`).

§1.17. **StarCoder2** (2024)
- Method: BPE
- Vocabulary size: 49,152
- Special tokens: `<|endoftext|>` and fill in the middle tokens. Also, special utility tokens for names of files and repos: `<filename>`, `<reponame>`, `<gh_stars>`
- Optimised for generating [code](https://arxiv.org/pdf/2305.06161); [also](https://arxiv.org/pdf/2402.19173).
- Each digit is assigned its own token, for better maths potential.

§1.18. **Galactica**
- Method: BPE
- Vocabulary size: 50,000
- Special tokens: `<s>`, `<pad>`, `</s>`, `<unk>`, `[START_REF]`, `[END_REF]`, `<work>` (used for chain-of-thought reasoning)
- optimised for scientific knowledge and trained on scientific papers
- optimised for code and meaningful whitespace 

§1.19. **Phi-3 (and Llama 2)**
- Method: BPE
- Vocabulary size: 32,000
- Special tokens: `<|endoftext|>` and chat utility tokens – `<|user|>`, `<|assistant|>`, `<|system|>`

Back up to: [Top](#)

### Tokeniser properties

§1.20. Design choices:
- tokenisation methods
  - BPE etc. 
- tokeniser parameters
  - vocabulary size
  - special tokens
  - capitalisation 
- the domain of the dataset
  - code
  - monolingual or multilingual text

Back up to: [Top](#)

## Token embeddings

§2.1.

Back up to: [Top](#)

----

Back up to: [Alammar & Grootendorst](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md) | [Tangator](../../../index.md)
