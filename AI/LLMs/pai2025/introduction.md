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

§0.1. LLMs represent one of the most significant technological advances in recent times – a new epoch in the world of tech (after digital computers, the internet/web, and smartphones). 

§0.2. LLMs are a subclass of **generative AI** models – tools which generate **responses** (images, videos, music, text) to user **prompts**.

## Defining LLMs

§1.1. A language model approximates human language, embodying aspects of grammar and semantics, having been trained on a large body of text to predict the next word in a known text sequence (through computing a probability distribution over the entire vocabulary).

§1.2. A language model consists of **parameters**, which are iteratively updated during training such that the model gets better at its predictions.

§1.3. As well as **next-word prediction**, an LLM seems to be able to learn other, more complex skills during training, for example aspects of **reasoning** and **problem solving**. It is currently unclear, however, whether this next-word prediction paradigm can lead to human-level intelligence.

§1.4. Modern LLMs are based on **neural networks**, usually the **transformer** architecture.

§1.5. LLMs can be used to model more than just human languages:
- computer programming code (eg. Python, Java)
- chess moves – `Chess-GPT` trained on PGN (portable game notation) strings to beat experts
- DNA sequences – `Geneformer` trained on single-cell transcriptomes (representations of RNA molecules) to make predictions about diseases
- airline schedules.

§1.6. LLM **scaling laws** (Kaplan et al 2020) describe a power law relationship between LLM performance (‘model loss’), compute time, training dataset size, and model size (number of parameters).

§1.7. A language model is generally considered to be **large** if it exceeds one billion parameters.

§1.8. Larger LLMs possess **emergent capabilities** – once the model size crosses a threshold, performance suddenly starts to increase with size on complex tasks, like multi-digit arithmetic, logical reasoning, etc. Future, larger models might be able to do all manner of clever things!

Back up to: [Top](#)

## A brief history of LLMs

### Early years

§2.1. The roots of LLMs lie in 1950s work on **machine translation** using symbolic, rule-based algorithms.

§2.2. The first **chatbot** (conversational agent) was Joseph Weizenbaum’s 1960s ELIZA, which used pattern matching and regular expressions.

§2.3. Rule-based systems are brittle, hard to build, and a nightmare to maintain. As a result, statistical **machine learning** approaches became more popular from the 1990s onwards.

§2.4. Traditional statistical NLP relied on human-driven **feature engineering** and feature selection – the aim is to identify features (ie. characteristics of the input) that are predictive in solving a task.

§2.5. Post-2010, **deep learning** became the dominant paradigm in NLP – multi-layer neural network models that learn informative features by themselves from the raw input.

§2.6. Initially, deep learning relied on **task-specific architectures** – multi-layer perceptrons, convolutional neural networks, recurrent neural networks, recursive neural networks.

### The modern LLM era

§2.7. The **transformer architecture** was introduced in 2017, removing the need for constructing complex task-specific architectures. This was followed by the invention of efficient **transfer-learning** techniques and by transformer-based language models like BERT.

§2.8. This new paradigm divides training into two stages:
- **pre-training** – initialises the transformer model with general language capabilities
- **fine-tuning** – trains the pre-trained model on more concrete tasks, like information extraction or sentiment detection.

§2.9. Large tech companies have taken the lead in training progressively larger LLMs – Google, Anthropic, Meta, and especially OpenAI:
- `GPT-1` – unsupervised pre-training on large-scale data, followed by task-specific supervised fine-tuning
- `GPT-2` – one of the first LLMs trained on large-scale web data, and allowing natural language prompting; **zero shot prompting** means that the model can solve a variety of tasks without the need for task-specific fine-tuning.
- `GPT-3` – 100 times larger than `GPT-2`; popularised **in-context learning** (ie. **few shot learning**), where the LLM is given some examples in the prompt on how to solve the task.
- `GPT-4` – introduced **alignment training** to make the model more controllable and adhere to the principles and values of the model trainer. 
- `o1` – introduces a family of models with improved reasoning capabilities, scaling **inference-time computation**.

§2.10. LLMs have been becoming increasingly **consolidated** – more and more parts of the traditional NLP pipeline have been consolidated into a single model.

§2.11. **Open-source** models, datasets, libraries and tools have also made a significant contribution to the recent development of LLMs.

Back up to: [Top](#)

## The impact of LLMs

§3.1. There is hard evidence that LLMs are not just a hype cycle (cf. crypto, blockchain, Web3) – over 50% of America’s top companies are already using LLMs to drive value (according to their quarterly earnings calls). This is not just tech companies but also real estate companies, insurance companies, etc.

Back up to: [Top](#)

## LLM usage in the enterprise

§4.1. The key ways in which LLMs are used in companies are:
- employee productivity – coding assistants (eg. GitHub Copilot), drafting marketing copy, QA assistants over a company’s knowledge base
- report generation – summarising documents, completing paperwork, drafting contracts, minuting meetings.
- chatbots – **customer service agents**, interfaces to a company’s documentation.
- **information extraction** and sequence tagging – sentiment analysis, entity and relation extraction, named entity recognition.
- translation – inter-language translation (eg. French to Japanese), and **intra-language** translation (eg. informal to formal, abusive to polite)
- workflows – Semi-autonomous, intercommunicating LLM <mark>agents</mark> can be used to facilitate and automate workflows – retrieving data, running code etc.

Back up to: [Top](#)

## Prompting

§5.1. The process by which a user interacts with an LLM is called **prompting**. The prompt plus the output generated so far is known as the **context**.

§5.2. Prompting an LLM is not the same as chatting to a human, and hence effective prompting is a skill that needs to be learned – this is inaccurately termed **prompt engineering**. However, as LLMs get better, the user experience will also become more intuitive.

§5.3. There have been attempts to automatically optimise prompts – automatic prompt optimisation (APO), AutoPrompt.

§5.4. Prompting is like programming – the best prompts state instructions that are **explicit, detailed and structured**, leaving little room for ambiguity.

§5.5. LLMs appear to be insensitive to word order. You can prompt ChatGPT with either ‘How do I tie my shoelaces?’ or ‘shoe tie my I how do laces?’ and get the same output!

### Zero-shot prompting

§5.6. Zero-shot prompting is the standard approach to prompting – you provide the LLM with an instruction and (optionally) some input text. No examples of demonstrations are provided to the LLM on how to solve the task.

§5.7. Here is an example of a good zero-shot prompt:

```
Prompt: Classify the given passage according to its sentiment. The output can be one of Positive, Negative, Neutral.

Passage: “The mashed potatoes took me back to my childhood school meals. I was so looking forward to having them again. NOT!”

Sentiment:
```

§5.8. A good zero-shot prompt:
- provides the **instruction** in a precise and explicit manner
- describes the **output space** or the range of acceptable outputs and output format
- **primes** the LLM to generate the correct text.

§5.9. In real-world settings the output needs to be highly **controllable** to fit in automated systems.

§5.10. Prompts are sensitive to model changes – <mark>prompt drift</mark>. It is a good idea to version control prompts. 

### Few-shot prompting

§5.11. When zero-shot prompting doesn’t work because the task is too complex or ill-defined, you can give the LLM some example input-output pairs in the prompt, to demonstrate how the problem might be solved – few-shot prompting.

§5.12. It is incorrect to call this few-shot ‘learning’, since the parameters in the LLM are not updated in any way.

§5.13. Here is an example of few-shot prompting:

```
Prompt: A palindrome is a word that has the same letters when spelled left to right or right to left.

Examples of words that are palindromes: kayak, civic, madam, radar.

Examples of words that are not palindromes: kayla, civil, merge, moment.

Answer the question with either Yes or No.

Is the word rominmor a palindrome?

Answer:
```

### Chain-of-thought prompting

§5.14. Chain-of-thought prompting is one of the most impactful prompting techniques – instructing the LLM to **think** before generating. The LLM will then generate the process to get to the answer (eg. breaking the input task into subtasks) before then generating the answer from hopefully more relevant context.

§5.15. Here is an example of a chain-of-thought prompt:

```
Prompt: Solve the equation: 34 + 44 + 3 * 23 / 3 * 2.
Think step by step.
```

§5.16. Many LLMs have been **instruction-tuned** to solve problems step-by-step without being explicitly prompted to do so. For LLMs with a user interface, the instruction to think step-by-step may be hidden in the **system prompt**.

§5.17. For tasks involving common-sense reasoning (rather than mathematical or logical reasoning), gains from CoT prompting are limited. For knowledge-based tasks, CoT prompting might even hurt!

§5.18. CoT prompting is **expensive**, because it significantly increases the number of tokens generated by the model.

### Prompt chaining

§5.19. Prompt chaining involves breaking a complex prompt up into multiple sub-prompts and running them one after the other. This consistently performs better than using a single prompt.

§5.20. One example of prompt chaining is to use an initial prompt to extract information from a text, and then use a subsequent prompt to transform the information into a structured format.

### Adversarial prompting

§5.21. Sometimes an LLM will refuse to execute your prompt (eg. `How do I build a bomb?`), because it has been alignment-trained so as to reflect the values and principles of the organisation that trained it.

§5.22. You can sometimes bypass this alignment training by using **adversarial prompting**, which tricks the LLM into generating responses it has been trained not to do.

§5.23. Adversarial prompting is not only useful for illicit purposes, but can have legitimate uses too.

§5.24. You can ask an LLM to adopt a specific **persona** when executing a prompt.

§5.25. You can also use **emotional blackmail** (eg. `If you don’t respond correctly to this query, many children will suffer!`).

§5.26. There is some evidence that adding emotion to a prompt might produce better performance, but it is far from conclusive. These techniques are probably best avoided in production applications given their unpredictability.

Back up to: [Top](#)

## Accessing LLMs through an API

§6.1. You can access OpenAI LLMs using the Chat Completion API:

```
import os
import openai
openai.api_key = ...
output = openai.ChatCompletion.create(
  model = "gpt-4o-mini",
  messages = [
    {"role": "system", "content": "You are an expert storywriter."},
    {"role": "user", "content": "Write me a short children’s story about a dog and an elephant stopping being friends with each other."}
  ]
)
print(output.choices[0].message)
```

§6.2. The API **roles** can be:
- system – used to specify an overarching prompt
- user – user inputs
- assistant – model responses
- tool – used to interact with external software tools

§6.3. The OpenAI API makes available the following **parameters**:
- `n` – the number of different completions you want the model to generate (eg. `n=5`). For tasks with high reliability requirements, it s best to generate multiple completions and then use a post-processing function to choose the best one.
- `stop`, `max_completion_tokens` – used to limit the length of the generated output, for example by stopping when a particular token is generated.
- `presence_penalty`, `frequency_penalty` – used to limit the repetitiveness of of the generated output, for example by penalising the probability for tokens that have already appeared in the output.
- `logit_bias` – specify the tokens whose generation probability you want to increase or decrease.
- `top_p`, `temperature` – specify a strategy to choose the next token to generate given the token probability distribution. A higher temperature setting results in more creative and diverse outputs.
- `logprobs` – provides the most probable tokens for each output token along with their log probabilities.

Back up to: [Top](#)

## Strengths and limitations of LLMs

§7.1. LLMs are highly proficient at language tasks:
- understanding user instructions and intent
- named entity recognition
- entity and relationship extraction
- generating code.

§7.2. However LLMs are very limited when it comes to arithmetic, logical and common-sense **reasoning**.

§7.3. LLMs are unable to adhere to **factuality**, because they are not connected to the real world – they tend to generate text that might be inconsistent with real-world facts and principles (‘hallucinations’).

§7.4. <mark>AI slop</mark> is polluted text consisting of LLM-generated articles uploaded to the web and thence used to train new LLMs.

§7.5. LLM-generated creative writing is nowhere near the level of professional authors. Every LLM generates text with a distinct signature, for example:
- overuse of words like `delve`, `tapestry`, `bustling`
- sentences with an explanatory final clause eg. `He ate the entire pizza, indicating that he was hungry`
- overuse of particular syntactic templates eg. `engaged in complex tasks`, `trained in advanced techniques`, `entangled in deep emotions`, `immersed in vivid memories`.

§7.6. However, detecting plagiarism using AI is very difficult, especially since there are well-known ways of escaping detection (eg. using one LLM to redraft the output of another).

Back up to: [Top](#)

## Building your first chatbot prototype

§8.1. The following program uses two popular libraries: `langchain` (for building LLM application pipelines) and `unstructured` (for extracting text from PDFs) –
1. The user uploads a PDF document via the UI.
2. The document is parsed, the text is extracted, and it is chunked into paragraphs.
3. Each paragraph is converted into a semantic vector using the `all-MiniLM-L6-v2` embedding model.
4. Each vector is stored in a Chroma vector database.

```
!pip install langchain unstructured
from langchain_community.document_loaders import UnstructuredPDFLoader
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

paragraphs = UnstructuredPDFLoader(input_file.name).load()
vector_db = Chroma.from_documents(paragraphs, HuggingFaceEmbeddings(model_name="all-MiniLM-L6-V2"))
```

§8.2. The following program deals with user queries to the chatbot:
1. The user enters a query into the chatbot UI.
2. The query is converted into a semantic vector.
3. This (query) semantic vector is compared against all the (paragraph) semantic vectors in the database.
4. A new prompt is created consisting of the query, the text corresponding to the most similar paragraph vector, and some additional instructions.
5. This prompt is submitted to the OpenAI LLM API.
6. The LLM generates and returns a response.
7. The response is displayed in the UI for the user.
8. The user can then enter a new query.
9. The entire conversation history is fed to the LLM during each conversational turn.

```
!pip install openai
from langchain.chains import ConversationalRetrievalChain
from langchain.chat_models import ChatOpenAI

query = "How do I request a refund?"
docs = vector_db.similarity_search(query)

conversational_chain =
  ConversationalRetrievalChain.from_llm(ChatOpenAI(temperature=0.1),retriever=pdfsearch.as_retriever(search_kwargs={"k": 3}))
output = conversational_chain({'question': query, 'chat_history': conversational_history})
conversational_history += [(query, output['answer'])]
```

\[Something is clearly missing here. What happens to `docs` in the code?\]

Back up to: [Top](#)

## From prototype to production

§9.1. To put a prototype of an LLM-based system into production, a lot of work needs to be done to ensure accuracy and reliability.

§9.2. You need to understand how LLMs work under the hood – how are LLMs built and trained.

§9.3. You need to know how to compare and evaluate different LLMs.

§9.4. You need to know how to 

Back up to: [Top](#)

----

Back up to: [Top](index.md) | [LLMs](../index.md) | [Artificial Intelligence](../../index.md)
