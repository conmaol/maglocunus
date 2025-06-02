# Adapting LLMs to your use case

Contents:
- [Navigating the LLM landscape](#navigating-the-llm-landscape)
- [How to choose an LLM for your task](#how-to-choose-an-llm-for-your-task)
- [Loading LLMs](#loading-llms)
- [Decoding strategies](#decoding-strategies)
- [Running inference on LLMs](#running-inference-on-llms)
- [Structured outputs](#structured-outputs)
- [Model debugging and interpretability](#model-debugging-and-interpretability)

## Navigating the LLM landscape

### Who are the LLM providers?

Types of LLM provider:
- companies providing proprietary LLMs, either via API endpoints (LLM-as-a-service), or in partnership with a cloud provider (Amazon Bedrock and SageMaker JumpStart, Google’s Vertex AI, Microsoft’s Azure OpenAI):
  - OpenAI – GPT-2, GPT-3, GPT-3.5, GPT-4
  - Google – Gemini
  - Anthropic – Claude, Claude-2
  - Cohere – Command, Base
  - AI21 Labs – Jurassic
  - Amazon – Titan
  - X.AI – Grok
  - Databricks / MosaicML – MPT
  - Stability AI – StableLM
  - Adept AI – Persimmon
  - MistralAI – Mistral
- companies providing open source LLMs
  - companies that make LLM weights public and monetise by providing deployment services
    - TogetherAI – RedPajama
  - companies whose primary business depends on AI adoption:
    - Cerebras – Cerebras-GPT, BTLM
  - commercial research labs –
    - Microsoft – DeBERTa, DialoGPT, BioGPT, MPNet
    - Google – BERT, MobileBERT, T5, FLAN-T5, ByT5, Canine, UL2, Flan-UL2, Pegasus PaLM, PaLMV2, ELECTRA, Tapas, Switch
    - Meta – RoBERTa, Llama, Llama 2, BART, OPT, Galactica
    - Salesforce – CTRL, XGen, EinsteinGPT
- self-organising open source collectives and community research organisations
  - Eleuther AI – Pyythia, GPT Neo, GPT-NeoX, GPT-J
  - Big Science – BLOOM
  - Ontocord AI – MDEL
- academia and government
  - Abu Dhabi’s Technology Innovation Institute – Falcon
  - Tsinghua University – GLM
  - UC Berkeley – OpenLLaMA

### Model flavours

It is customary for companies to release different-sized variants of the same pre-trained model, measured by number of parameters eg.
- Llama 2 – 7B, 13B, 70B

In many cases, the pre-trained ‘base model’ has been <mark>augmented</mark> to make it more amenable to user tasks, via fine-tuning and/or human supervision.

#### Instruct models

<mark>Instruction-tuned models</mark> are augmented models which are specialised in following instructions written in natural language. They are more helpful than base models, which are like a ‘rebellious teenager’ which needs tedious, trial-and-error prompt engineering to get the right results.

FLAN is a popular supervised instruction-tuning dataset, consisting of a diverse set of tasks expressed as input-output pairs.

Supervised fine-tuning can also be used to make an LLM less ‘harmful’ by training it on <mark>safety datasets</mark> that help align model outputs with the values and preferences of the organisation (eg. by refusing to answer inappropriate requests from users). This is called <mark>alignment-tuning</mark>.

A more advanced technique is <mark>reinforcement learning from human feedback</mark> (RLHF), where human beings rank candidate outputs based on helpfulness and harmlessness. These ranked outputs are then used to iteratively train a reward model for the LLM.

Anthropic introduced an alternative method called <mark>reinforcement learning from AI feedback</mark> (RLAIF). Humans provide an LLM with a desired set of principles and values (‘constitutional AI’ – *Don’t be racist! Don’t be rude!*) and the model then decided whether its outputs adhere to these principles.

Instruction-tuning can have side effects – fine-tuning inevitably causes regressions, meaning that the base model loses some capabilities. For example, instruction-tuning using FLAN worsens chain-of-thought capabilities (unless CoT data is explicitly added to the fine-tuning dataset).

Alignment-tuning can also have the side effect that a pre-tuned model may be aligned to values that are not held by your own organisation.

#### Chat models

<mark>Chat models</mark> are instruction-tuned models that are optimised for multi-turn dialogue – Chat-GPT, Llama 2-Chat, MPT-Chat, OpenAssistant, etc. 

#### Long-context models

#### Domain-adapted or task-adapted models



### Open source LLMs

Back up to: [Top](#)

## How to choose an LLM for your task

### Open source versus proprietary LLMs

### LLM evaluation

Back up to: [Top](#)

## Loading LLMs

### Hugging Face Accelerate

### Ollama

### LLM inference APIs

Back up to: [Top](#)

## Decoding strategies

### Greedy decoding

### Beam search

### Top-k sampling

### Top-p sampling

Back up to: [Top](#)

## Running inference on LLMs

Back up to: [Top](#)

## Structured outputs

Back up to: [Top](#)

## Model debugging and interpretability

Back up to: [Top](#)

----

Back up to: [Top](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md)
