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
- It is used in (pre-)pre-training to generate (learn?) a vocabulary from a training corpus.
- It is used in model training and inference to break input text into sequences of valid tokens (or OOV placeholders).
- The tokens are then mapped to their token IDs, which are then fed into the LLM itself.

§2.2. Using the `Flan-T5` LLM tokeniser:
- Example input: `What is 937 + 934?`
- Output tokens: `['_what', '_is', '_9', '37', '_+', '_9', '34', '?', '</s>']`
- Token IDs: `['125', '19', '668', '4118', '1768', '668', '3710', '58', '1']`

§2.3. Another example (including a spelling error):
- Input: `Insuffienct adoption of corduroy pants is the reason this economy is in the dumps!!!`
- Output tokens: `['_In', 's', 'uff', 'i', 'en', 'c', 't', '_adoption', '_of', '_cord', 'u', 'roy', '_pants', '_is', '_the', '_reason', '_this', '_economy', '_is', '_in', '_the', '_dump', 's', '!!!', '</s>']`
- Note that there is a distinct token for `!!!`.

§2.4. Very large LLMs trained on massive text corpora are more **robust to spelling errors**:
- `insuffienct` occurs 14 times in C4, and `insufficent` occurs over 1,100 times.
- Bert is relatively small and hence more sensitive to misspellings. 

§2.5. The `tiktoken` library contains the OpenAI tokeniser.

§2.6. A non-negligable number of LLM failures can be attributed to the tokeniser – especially if your target domain is different from the pre-training domain.

§2.7. There have been a number of forays into the world of <mark>tokenisation-free</mark> language modelling, where the tokeniser is consolidated into the LLM itself, instead of being a pre-processing step:
- **CANINE** acepts Unicode codepoints as input (using hashed embeddings to reduce the effective vocabulary size).
- **ByT5** accepts inputs in terms of bytes (thus just 259 tokens in the vocabulary, including a few special tokens).
- **Charformer** also accepts inputs as bytes and then uses a gradient-based subword tokeniser to construct latent subwords.

Back up to: [Top](#)

## Tokenisation pipeline

§3.1. The tokenisation pipeline usually consists of four stages:
- normalisation
- pre-tokenisation
- tokenisation
- post-processing

§3.2. The <mark>normalisation</mark> stage involves:
- converting text to lowercase (if using an uncased tokeniser)
- stripping off accents from letters (eg. `peña` to `pena`)
- Unicode normalisation
Note that more recent models do not do much normalisation.

§3.3. The <mark>pre-tokenisation</mark> stage can involve:
- performing word tokenisation (on whitespace) as a prelude to subword tokenisation

§3.4. The simplest and most widely used tokenisation algorithm is <mark>byte-pair encoding</mark>. Training a BPE tokeniser involves the following steps:
- Normalise and pre-tokenise the training dataset.
- Convert the output into a frequency distribution of initial (word) tokens.
- The initial vocabulary consists of the unique characters in these (word) tokens, eg. `b, a, t, c, p, s, m, f, n, ...`
- Use <mark>merge</mark> rules to add additional two character tokens to the vocabulary, consisting of the most frequent consecutive pairs, eg. `ap, at, ba, ...`
- Do the same for three character tokens, eg. `cap, sap, map, ...`
- Continue merging until the desired vocabulary size is reached.
- The tokeniser is the final set of merge rules, which can then be used to tokenise input prompts.

§3.5. Another tokenisation algorithm is <mark>WordPiece</mark>. This is similar to BPE but uses maximum likelihood rather than the frequency approach. Merge rules are not used during actual tokenisation, but rather the tokeniser identifies the longest subword.

§3.6. Due to this training process, LLMs can end up with weird **glitch tokens** like `SolidMagiGoldcarp`. Token etymology is a hobby for many LLM enthusiasts – finding glitch tokens and unearthing their origins.

§3.7. The <mark>post-processing</mark> stage involves adding LLM-specific **special utility tokens** like `[CLS]` or `[SEP]`.

§3.8.





Back up to: [Top](#)

----

Back up to: [Top](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md)
