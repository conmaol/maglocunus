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

§1.1. There are four main kinds of LLM provider:
- companies providing proprietary LLMs
- companies providing open-source LLMs
- self-organising open source collectives and community research organisations (non-profits)
- academia and government.

§1.2. Some companies provide proprietary LLMs via API endpoints (LLM-as-a-service), and/or in partnership with a cloud provider (Amazon Bedrock and SageMaker JumpStart, Google’s Vertex AI, Microsoft’s Azure OpenAI). Some examples are:
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

§1.3. Some companies provide open-source LLMs, sometimes in addition to their proprietary offerings. For example: 
  - Some companies make their LLM weights public and monetise by providing deployment services, eg. TogetherAI – RedPajama.
  - Some companies have a primary business which depends on AI adoption, eg. Cerebras – Cerebras-GPT, BTLM.
  - Some companies have their own research labs, eg.
    - Microsoft – DeBERTa, DialoGPT, BioGPT, MPNet
    - Google – BERT, MobileBERT, T5, FLAN-T5, ByT5, Canine, UL2, Flan-UL2, Pegasus PaLM, PaLMV2, ELECTRA, Tapas, Switch
    - Meta – RoBERTa, Llama, Llama 2, BART, OPT, Galactica
    - Salesforce – CTRL, XGen, EinsteinGPT.

§1.4. Some LLMs are provided by self-organising open-source collectives and community research organisations, eg.
  - Eleuther AI – Pyythia, GPT Neo, GPT-NeoX, GPT-J
  - Big Science – BLOOM
  - Ontocord AI – MDEL.

§1.5. Some LLMs are provided by academia and government, eg.
  - Abu Dhabi’s Technology Innovation Institute – Falcon
  - Tsinghua University – GLM
  - UC Berkeley – OpenLLaMA.

### Model flavours

§2.1. Some LLMs are made available in different-sized variants, measured by number of parameters. For example, the Llama 2 LLM comes in 7B, 13B and 70B variants.

§2.2. Some LLMs are <mark>base LLMs</mark> – they are solely pre-trained as next-word prediction models or denoising models. Base models are generally unhelpful and uncooperative, and sometimes ‘harmful’ or inappropriate. They are like ‘rebellious teenagers’ which need tedious, trial-and-error prompt-engineering to get the right outputs.

§2.3. <mark>Augmented LLMs</mark> are base LLMs which have been optimised to be more helpful to users, or to be more in line with the values and principles of the organisation responsible for them.

§2.4. Some augmented LLMs are <mark>fine-tuned LLMs</mark>, which have been post-trained via supervised learning on a <mark>fine-tuning dataset</mark> – a set of desired input-output pairs.

§2.5. Some augmented LLMs are <mark>human-feedback-reinforced LLMs</mark>, whose outputs are ranked by a reward model which has been trained via reinforcement learning from human feedback (RLHF) on human judgments about the base LLM outputs.

#### Instruct models

§2.6. <mark>Instruct LLMs</mark> are augmented LLMs which have been optimised to be helpful, ie. to follow user instructions. 

§2.7. <mark>FLAN</mark> is a popular instruction-tuning dataset, and is used to create instruction-tuned LLMs (ie. fine-tuned, instruct LLMs).

§2.8. Here is an example of an input-output pair in the FLAN instruction-tuning dataset:
```
Prompt: “What is the sentiment of the following review? The pizza was ok but the service was terrible. I stopped in for a quick lunch and got the slice special but it ended up taking an hour after waiting several minutes for someone at the front counter and then again for the slices. The place was empty other than myself, yet I couldn’t get any help/service. OPTIONS: – negative – positive”
FLAN: “Negative” 
```


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
