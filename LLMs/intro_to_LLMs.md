# An introduction to Large Language Models

[Notes from the LinkedIn Learning course ‘Introduction to Large Language Models’ by Jonathan Fernandes (2023-09)]

§1. Large Language Models (LLMs) are ”a kind of AI that can understand and produce human-like text”.

§2. Here are some examples of LLMs –
- BERT (Bidirectional Encoder Representations from Transformers)
- GPT-3 (Da Vinci) – developed by OpenAI
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
- You end up with something like GPT-3 – an LLM which can produce natural-sounding textual output, but which is not good at understanding the user’s intentions (ie. following instructions in the prompt).

§6. We can make pre-trained LLMs better at following the user’s instructions using **supervised fine tuning** followed by **Reinforcement Learning from Human Feedback** (RLHF), as outline in the 2022 OpenAI paper ‘Training language models to follow instructions with human feedback’.

§7. For supervised fine-tuning –
- Human ‘labellers’ write a corpus of thousands of expected output texts for particular prompts (eg. ‘Explain the moon landing to a 6 year old’).
- This corpus is then used to fine-tune a pre-trained LLM. 

§8. For RLHF –
- A pre-trained, fine-tuned LLM is asked to generate a number of different output texts for the same prompt.
- The human labeller then ranks these outputs from best to worst, and tags them for inappropriate language, irrelevance, factual inaccuracy etc.
- This ‘human feedback’ is then used to train a **reward model**, assigning a score to each generated output text.
- This reward model is then used to optimise the pre-trained fine-tune LLM, using the **Proximal Policy Optimisation** (PPO) algorithm.
- You end up with a LLM like GPT-4, which is much better at following the user’s instructions.

§9. The transformer architecture underlying all LLMs has two main kinds of component – 
- **Encoders** accept natural language input and gradually build up a full internal understanding of the different aspects of this input text.
- **Decoders** generate natural language output text from some kind of internal representation

§10. Examples of LLM tasks –
- **encoder-only** – sentence classification (eg. deciding if a film review is positive or negative)
- **decoder-only** – text generation
- **encoder + decoder** – translation, summarisation







2. parameters

3. tokens

4. context window/length


----
encoders and decoders

parameters
----

Next: [https://web.stanford.edu/~jurafsky/slp3/]


