# Tokenisation

A tokeniser is a machine that accepts a string of characters as its input and outputs a list of token identifiers (positive integers), which can then be fed into a large language model.

For example, OpenAI’s [GPT-4 tokeniser](https://platform.openai.com/tokenizer) accepts the following input string:
```
"Have the bards who preceded me left any theme unsung?"
```

- Tokens: `"Have", " the", " b", "ards", " who", " preceded", " me", " left", " any", " theme", " uns", "ung", "?"`
- Token IDs: `[15334, 290, 287, 3098, 1218, 91138, 668, 3561, 1062, 9660, 3975, 988, 30]`


----

Back up to: [LLMs](index.md) | [AI](../index.md) | [Tangator](../../index.md)
