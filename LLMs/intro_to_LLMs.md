# An introduction to Large Language Models

[Notes from the LinkedIn Learning course ‘Introduction to Large Language Models’ by Jonathan Fernandes (2023-09)]

§1. Large Language Models (LLMs) are ”a kind of AI that can understand and produce human-like text”.

§2. Here are some examples of LLMs –
- OpenAI
  - **GPT-3** (Generative Pre-trained Transformer – 2020) – 175 billion parameters; 300 billion training tokens; context length: 2048 tokens
  - **ChatGPT** – context length: 4096 tokens
  - **GPT-4** – context length: 8192 tokens
  - **GPT-4-32k** – context length: 32k tokens
- Google
  - **BERT** (Bidirectional Encoder Representations from Transformers – 2018) – 110 million parameters; 250 billion training tokens
  - **Bard**
  - **PaLM** (Pathways Language Model – 2022) – 540 billion parameters; 780 billion training tokens (multilingual)
  - **PaLM 2** (2023) – unknown size
  - DeepMind
    - **Gopher** (2022) – 280 billion parameters; 300 billion training tokens
    - **Chinchilla** – 70 billion parameters; 1.4 **trillion** training tokens
- Meta
  - **LLaMa 2** (2023) – 70 billion parameters
- Anthropic
  - **Claude 2** – context-length: 100k tokens
- MicroSoft/Nvidia
  - **MT-NLG** (Megatron-Turing) (2022) – 530 billion parameters; 270 billion training tokens
- **LaMDA** (2022) – 137 billion parameters; 168 billion training tokens
- **Jurassic** (2021) – 178 billion parameters; 300 billion training tokens

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

§11. The ‘size’ of an LLM is measured by its **parameter count** – the number of weighted edges between layered nodes in the trained neural network.  

§12. The ‘scope’ of an LLM is measured by its **context window/length** – the number of tokens it can remember and work with during a single prompt-completion interaction. For example – What size of text can be given to an LLM for summarisation? What length of story can an LLM generate?

§13. BERT is used by Google search, and was trained for two specific language understanding (ie. encoding) tasks – 
- **Masked Language Modelling** (MLM) - predicting a masked-out word
- **Next Sentence Prediction** (NSP) - deciding whether one sentence logically follows from another

§14. In 2020, OpenAI published research (the ‘Scaling laws’) demonstrating that the most effective way of increasing the performance of an LLM is to increase the size of the model (the number of parameters), compared to increasing the size of the training dataset (number of tokens) or training the model for longer.

§15. GPT-3 was designed to enable ‘few-shot learning’ – rather than having to retrain an LLM for every different kind of task (sentiment analysis, question answering etc.), a large enough LLM should be able to learn new tasks when prompted with a couple of examples.

§16. Against the trend to increase model size to get better performance, Google DeepMind’s Chinchilla LLM demonstrated that a smaller model can signidicantly outperform a larger model when it is trained on significantly more tokens. The concluded that model size and corpus size should be scaled in equal proportion, and that current LLMs may well be ‘over-sized’.

§17. Google’s experience with PaLM suggests that certain tasks require larger LLMs than others – 
- 8 billion parameters – arithmetic, question answering, language understanding
- 62 billion parameters – summarisation, common-sense reasoning, translation
- 540 billion parameters – general knowledge, reading comprehension, joke explanation

§18. PaLM 2 is even bigger and better than PaLM. It has passed advanced language proficiency and medical licensing exams (Med-PaLM 2), and is much better at mathematical reasoning and computer programming. It has multimodal capabilities (eg. image understanding) and is destined to power the next generation of Google products (Google Docs, Gmail, etc).

§19. 

ChatGPT

GPT-4



----


Next: [https://web.stanford.edu/~jurafsky/slp3/]


