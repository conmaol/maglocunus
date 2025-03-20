# RAG and Fine-Tuning

[Notes on the LinkedIn Learning course *RAG and Fine-Tuning Explained* by Morten Rand-Hendriksen (2024)]

§1. Retrieval Augmented Generation (RAG) and fine-tuning are the current best-practice solutions to the two main challneges of implementing LLMs in the enterprise:
- grounding LLMs in real world enterprise data
- ensuring they provide the right data in return.

# How LLMs work

§2. LLMs are not ‘intelligent’. They don’t ‘look up’ the answers to questions we ask them. They are just language transformers. They contain an enormously complex multidimensional map of English, to which they apply advanced mathematics to probabilistically <mark>autocomplete</mark> the document we have started with our prompt. 

# Context makes all the difference

§3. The more context we provide to the LLM in our prompts, the more likely it is to autocomplete the chat in the way we would expect. This is called ‘prompt engineering’.

# RAG: Retrieval Augmented Generation

§4. LLMs don’t actually ‘know’ anything, so they can produce incorect information with 100% confidence – <mark>hallucinations</mark>.

§5. The solution is to use RAG. Before starting to autocomplete the prompt, the LLM first <mark>retrieves</mark> some additional context from a knowledge base (eg. the web, or any structured data source, vector database, etc). It then augments the prompt with this retrieved context, and then sends the whole thing to the LLM for to <mark>generate</mark> the response.

# The RAG flow

§6. 
```
1. The user submits a prompt to the LLM.

2. The LLM generates an appropriate query, and submits it to the ‘grounded truth’ knowledge base.

3. The knowledge base processes the query and returns the requested data to the LLM.

4. The LLM combines the original prompt with the retrieved data and probabilistically generates a response.

5. Until the LLM judges the response to be sufficiently faithful to the retrieved data:
    a. The LLM regenerates the response. [the verification loop]

6. The LLM returns the generated response to the user.
```

# Embeddings: Helping AI understand data

§7. An LLM uses an <mark>embeddings model</mark> to convert English texts (including user prompts and unstructured data in the knowledge base) into embeddings – points and vectors in a multidimensional space, where each dimensional measures some parameter. Embeddings are then compared to establish the semantic closeness of two texts, based on how far apart the points/vectors are.

§8. Embeddings are stored in the knowledge base alongside the originsl text.

# Knowledge Graphs

§9. 

# Fine-tuning

----

Back up to: [LLMs](index.md) | [AI](../index.md)
