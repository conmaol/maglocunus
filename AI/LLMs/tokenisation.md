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

Word tokenisation is easy to understand and implement (notwithstanding edge cases like the word-internal apostrophes in `don’t`, `can’t`, `Mary’s` etc). Word tokenisers do not need to be trained and are purely left-to-right deterministic, meaning that they are very fast and efficient.

However, modern LLMs do not use word tokenisers, for the following reasons:


too many tokens
not general enough cf. bard, bards
meaningful whitespace is lost
not always clear where punctuations markers are right/left adjoining or not



Secondly, the GPT-4 tokeniser is clear not a **character tokeniser** either.



subword tokenisation, but not linguistically sound

## Whitespace

whitespace is preserved

case sensitive






----

Back up to: [LLMs](index.md) | [AI](../index.md) | [Tangator](../../index.md)
