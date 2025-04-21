# Designing LLM Applications – Introduction

Contents:
- [Defining LLMs](#defining-llms)
- [A brief history of LLMs](#a-brief-history-of-llms)
- [The impact of LLMs](#the-impact-of-llms)
- [LLM usage in the enterprise](#llm-usage-in-the-enterprise)
- [Prompting](#prompting)
- [Accessing LLMs through an API](#accessing-llms-through-an-api)
- [Strengths and limitations of LLMs](#strengths-and-limitations-of-llms)
- [Building your first chatbot prototype](#building-your-first-chatbot-prototype)
- [From prototype to production](#from-prototype-to-production)

§0.1. LLMs represent one of the most significant technological advances in recent times – a new epoch in the world of tech.

§0.2. LLMs are a subclass of <mark>generative AI</mark> models – tools which generate **responses** (images, videos, music, text) to user **prompts**.

## Defining LLMs

§1.1. A language model approximates human language, embodying aspects of grammar and semantics, having been trained on a large body of text to predict the next word in a known text sequence.

§1.2. A language model consists of <mark>parameters</mark>, which are iteratively updated during training such that the model gets better at its predictions.

§1.3. As well as <mark>next-word prediction</mark>, an LLM seems to be able to learn other, more complex skills during training, for example aspects of reasoning and problem solving. It is currently unclear, however, whether this next-word prediction paradigm can lead to human-level intelligence.

§1.4. Modern LLMs are based on <mark>neural networks</mark>, usually the **transformer** architecture.

§1.5. LLMs can be used to model more than just human languages – computer programming code, chess moves (Chess-GPT trained on PGN strings to beat experts), DNA sequences (Geneformer trained on single-cell transcriptomes to make predictions about diseases), airline schedules.

§1.6. LLM <mark>scaling laws</mark> (Kaplan et al 2020) describe a power law relationship between LLM performance, compute time, training dataset, and model size (number of parameters).

§1.7. Larger LLMs possess <mark>emergent capabilities</mark> – once the model size crosses a threshold, performance suddenly starts to increase with size on complex tasks like multi-digit arithmetic, logical reasoning, etc. Future, larger models might be able to do all manner of clever things!

Back up to: [Top](#)

## A brief history of LLMs

§2.1.

### Early years

### The modern LLM era

Back up to: [Top](#)

## The impact of LLMs

§3.1.

Back up to: [Top](#)

## LLM usage in the enterprise

§4.1. The key ways in which LLMs are used in companies are:
- employee productivity – coding assistants (eg. GitHub Copilot), 
- report generation – summarising documents, completing paperwork, drafting contracts, minuting meetings.
- chatbots – <mark>customer service agents</mark>, interfaces to a company’s documentation.
- <mark>information extraction</mark> and sequence tagging – sentiment analysis, entity and relation extraction, named entity recognition.
- translation – inter-language translation (eg. French to Japanese), and <mark>intra-language</mark> translation (eg. informal to formal, abusive to polite)
- workflows – Semi-autonomous, intercommunicating LLM <mark>agents</mark> can be used to facilitate and automate workflows.

Back up to: [Top](#)

## Prompting

§5.1.

### Zero-shot prompting

### Few-shot prompting

### Chain-of-thought prompting

### Prompt chaining

### Adversarial prompting

Back up to: [Top](#)

## Accessing LLMs through an API

Back up to: [Top](#)

## Strengths and limitations of LLMs

Back up to: [Top](#)

## Building your first chatbot prototype

Back up to: [Top](#)

## From prototype to production

Back up to: [Top](#)

----

Back up to: [Top](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md)
