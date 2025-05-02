# Tokenisation

A tokeniser is a machine that accepts a string of characters as its input and outputs a list of token identifiers (positive integers), which can then be fed into a large language model.

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

Looking closely at the output of this tokeniser, a number of observations are worth making.

First of all, the GPT-4 tokeniser is clearly not a **word tokeniser**.



Not word-level tokenisation by whitespace

Not character-level tokenisation either

subword tokenisation, but not linguistically sound

## Whitespace

whitespace is preserved

case sensitive






----

Back up to: [LLMs](index.md) | [AI](../index.md) | [Tangator](../../index.md)
