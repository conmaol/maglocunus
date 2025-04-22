# Designing LLM Applications – Pre-training data

Contents:
- [Ingredients of an LLM](#ingredients-of-an-llm)
- [Pre-training data requirements](#pre-training-data-requirements)
- [Popular pre-training datasets](#popular-pre-training-datasets)
- [Synthetic pre-training datasets](#synthetic-pre-training-datasets)
- [Training data preprocessing](#training-data-preprocessing)
- [Effect of pre-training data on downstream tasks](#effect-of-pre-training-data-on-downstream-tasks)
- [Bias and fairness issues in pre-training datasets](#bias-and-fairness-issues-in-pre-training-datasets)

§0.1. Decisions made during the pre-training process can heavily impact downstream performance.

§0.2. <mark>Model transparency</mark> is important – some proprietary LLMs do not make public information about how they work or how they were trained.

## Ingredients of an LLM

§1.1. The basic ingredients of an LLM are:
- **pre-training data** – What is the LLM trained on? What are the popular pre-training datasets? How is the training data <mark>pre-processed</mark> to ensure high-quality input.
- **vocabulary and tokeniser** – What is the LLM trained over? <mark>Mismatches</mark> between human-perceived words and LLM tokens can have an impact on downstream tasks.
- **learning objective** – What is the LLM being pre-trained to do? This may impact downstream tasks.
- **architecture** – What is the internal structure of the LLM? What are the components and how to they connect and interact? Every architecture has its own <mark>inductive bias</mark> – assumptions about the data and tasks.

§1.2. <mark>Data sources</mark> are collected, cleaned and filtered to create the <mark>pre-training dataset</mark>, which is then trained on the learning objective to create a trained <mark>base model</mark>, underpinned by a vocabulary.

§1.3. Base models can then be <mark>fine-tuned</mark> on a much smaller dataset to align them more with human needs and preferences:
- **supervised instruction fine tuning** – better at following human instructions
- **reinforcement learning by human feedback** (RLHF) – more aligned with human preferences
- **domain-adaptive (task-adaptive) continued pre-training** – better attuned to specific domains and tasks

§1.4. Fine-tuned LLM can be called *instruct models*, *chat models*, *domain-adapted models*, etc.

Back up to: [Top](#)

## Pre-training data requirements

Back up to: [Top](#)

## Popular pre-training datasets

Back up to: [Top](#)

## Synthetic pre-training datasets

Back up to: [Top](#)

## Training data preprocessing

Back up to: [Top](#)

## Effect of pre-training data on downstream tasks

Back up to: [Top](#)

## Bias and fairness issues in pre-training datasets

Back up to: [Top](#)

----

Back up to: [Top](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md)
