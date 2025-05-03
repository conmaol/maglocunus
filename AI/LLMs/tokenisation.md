# Tokenisation

A tokeniser is a machine that accepts a string of characters as its input and outputs a list of token identifiers (positive integers), which can then be fed into a large language model.

```mermaid
graph LR
    human([human])
    tokeniser[tokeniser]
    llm[LLM]
    human -- char[] --> tokeniser
    tokeniser -- int[] --> llm
    llm --> human
```

For example, OpenAI’s [GPT-4 tokeniser](https://platform.openai.com/tokenizer) accepts the following input string:
```
"Have the bards who preceded me left any theme unsung?"
```
And outputs the following list of token identifiers:
```
[15334, 290, 287, 3098, 1218, 91138, 668, 3561, 1062, 9660, 3975, 988, 30]
```
These output token identifiers stand for the following tokens:
```
15334  "Have"
290    " the"
287    " b"
3098   "ards"
1218   " who"
91138  " preceded"
668    " me"
3561   " left"
1062   " any"
9660   " theme"
3975   " uns"
988    "ung"
30     "?"
```

Looking closely at the output of this tokeniser, a number of things stand out.

First of all, the GPT-4 tokeniser is clearly not a **word tokeniser**.

A word tokeniser divides up an input string by implementing two basic rules:
- Spaces are token separators.
- Punctuation characters are tokens.

When fed the input string above, a word tokeniser would produce token identifiers corresponding to the following tokens:
```
Have
the
bards
who
preceded
me
left
any
theme
unsung
?
```

Note however that the output of the GPT-4 tokeniser includes some tokens which are not whole words:
- The word `bards` is tokenised as `" b", "ards"`.
- The word `unsung` is tokenised as `" uns", "ung"`.

Note also that when a word in the input is preceded by a space, the GPT-4 tokeniser includes that space at the start of the (first) corresponding token, as in `" the"`, `" who"`, etc.

Word tokenisation is simple and intuitive, easy to understand and implement (notwithstanding edge cases like the word-internal apostrophes in `don’t`, `can’t`, `Mary’s` etc). Word tokenisers do not need to be trained and are purely left-to-right deterministic, meaning that they are very fast and efficient.

Older language models, such as those based on the `word2vec` word-embedding algorithm, used word tokenisation. However, modern LLMs generally avoid using word tokenisers, because the resulting vocabulary of token types is simply too large to efficiently train an LLM on. Even the largest training corpora will have lexical gaps meaning that an LLM based on word tokenisation would have to deal with a relatively large number of out-of-vocabulary tokens in user input prompts. For similar reasons, an LLM based on word tokenisation would be less robust at handling mispellings. In addition, a language like English contains lots of related words which are treated as completely distinct by a word tokeniser, eg. `apology`, `apologise`, `apologetic`, `apologist`, which again does not allow for efficient learning of the underlying semantics, compared to a tokeniser which recognises stems (`apolog-`) and suffixes (`-y`, `-ise`, `-etic`, `-ist`).

Another reason for avoiding word tokenisation in modern LLMs is that they then cannot tokenise text from languages which do not use spaces to separate words, like Japanese or Chinese.

While it is clear that the GPT-4 tokeniser is not a word tokeniser, nor is it a **character tokeniser** either.

A character tokeniser simply divides up a string into the individual characters that it is composed of, as in:
```
H
a
v
e

t
h
e

b
a
r
d
s 

. . .
```
Note that the blank lines here indicate a single space character.

While the GPT-4 tokeniser does produce some tokens that consist of a single character, mainly punctuation characters like `?` in the example above, the vast majority of the tokens produced consist of multiple characters – the above example even contains the nine-character token ` preceded`.

Like word tokenisation, character tokenisers are simple and intuitive, easy to understand and implement, do not need to be trained, and are purely left-to-right deterministic.

However, current LLMs do not generally use character tokenisation either. While word tokenisers assume too large a vocabulary of token types for meaningful generalisations to be learned efficiently, character tokenisers have the exact opposite problem – the vocabulary (or more accurately the *alphabet*) they assume is too small.

The GPT-4 tokeniser thus occupies a middle ground between word tokenisation and character tokenisation – it is a **sub-word tokeniser**. 

Some of the tokens produced by the GPT-4 tokenisers are whole words, like `Have`. Others are whole words with a leading space, like ` the` or ` preceded`.

But, as noted already, there are also GPT-4 tokens that consist of parts of words, again with or without a leading space:
- The input word `bards` is tokenised as `" b", "ards"`.
- The input word `unsung` is tokenised as `" uns", "ung"`.

Note that the sub-word tokeniser used in GPT-4 seems to have little understanding of English word morphology though! For the two words which have been split up, this has been done in a very counterintuitive manner. It would make a lot more linguistic sense to analyse:
- `bards` as `bard+s` rather than as `b+ards`
- `unsung` as `un+sung` rather than as `uns+ung` 

In addition, there are some words which arguably should be split up by the tokeniser but are not:
- `preceded` could surely be analysed as `precede+d`, or perhaps even as `pre+cede+d`.

To give another example, the GPT-4 tokeniser parses the word `antidisestablishmentarianism` as `ant+idis+est+ablishment+arian+ism` rather than the more sensible `anti+dis+establish+ment+arian+ism`.

Thus, the GPT-4 tokeniser could more accurately be described as a *linguistically naive* sub-word tokeniser.

Before looking at how the GPT-4 tokeniser works, there are two more aspects of its behaviour to consider.

First of all, the GPT-4 tokeniser is case-sensitive:
- `Have` and `have` are distinct tokens, with IDs `15334` and `35723` respectively.
- `HAVE` is tokenised as `H+AVE`, ie. token `39` followed by token `16357`.

Secondly, leading spaces are meaningful within tokens:
- ` Have` has token ID `14465`, compared to `15334` for `Have`.
- ` have` has token ID `679`, compared to `35723` for `have`.

----

So, how does the linguistically naive sub-word tokeniser used by GPT-4 actually work? How does the tokeniser decide which words to split up and how to split them up, given that ot certainly does not appear to be using any pre-programmed knowledge of their actual linguistic sub-structure?

Technically, the GPT-4 tokeniser is known as a **byte-pair encoding** (BPE) tokeniser.

To build a BPE tokeniser you need two things:
- a corpus of texts to learn from
- a desired vocabulary size.

Different BPE tokenisers have different vocabulary sizes, ie. different numbers of token types that they recognise:
- GPT-2 (2019): c. 50k distinct tokens
- GPT-4 (2023): c. 100k distinct tokens
- LLaMa 2 (2023): c. 32k distinct tokens

Essentially, the desired vocabulary size tells the BPE training algorithm when to stop learning – when the desired size is reached.

Given corpus `C` and desired vocabulary size `N`:

1. Let `C2` be the list of characters resulting from character tokenising `C`.
2. Let `vocab` be the set of distinct tokens in `C2`, ie. `vocab = set(C2)`.
3. Ascertain the vocabulary size of the current tokenised corpus.
4. While the current vocabulary size is less than the desired vocabulary size:
   a. Ascertain the most frequent adjacent pair x+y of tokens in the current corpus.
   b. Merge all instances of x+y in the current corpus to xy.
   c. Add xy to the (start of the) vocabulary list.
5. Return the vocabulary list

----

Back up to: [LLMs](index.md) | [AI](../index.md) | [Tangator](../../index.md)
