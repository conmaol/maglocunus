# An introduction to Large Language Models

[Notes from the LinkedIn Learning course ‘Introduction to Large Language Models’ by Jonathan Fernandes (2023-09)]

§1. Large Language Models (LLMs) are ”a kind of AI that can understand and produce human-like text”.

§2. Here are some examples of LLMs –
- BERT
- GPT-3 (Da Vinvi) – developed by OpenAI
- GPT-4
- LLaMa (2) – a group of LLMs developed by Meta (2023)
- ChatGPT

§3. An LLM is a software system which accepts an input text from the user (the *prompt*) and responds with an output text (the *completion*).
- For example, the user inputs a text along with a request for a 250-word summary, and the LLM responds with the requested summary.

§4. All LLMs use components of **transformers** – an AI model architecture proposed by researchers from Google researchers in a 2017 paper ‘Attention is all you need’.

§5. The first step in building an LLM is the **pre-training** –
- You start with an LLM (ie. a neural network) with randomly assigned weights.
- You train the LLM on vast amounts of textual data (Wikipedia, Project Gutenberg, ArXiv, Stack Exchange, GitHub, etc.).
- This burns through months of compute time on hundreds of Nvidia graphical processing units (GPUs), costing millions of dollars per training run.
- You end up with something like GPT-3 – an LLM which can produce natural sounding textual output, but which is not good at understanding the user's intentions (ie. following instructions).






encoders and decoders

parameters

