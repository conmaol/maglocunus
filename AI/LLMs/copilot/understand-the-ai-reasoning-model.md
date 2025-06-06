# Understand the AI reasoning model powering Copilot’s smartest features

\[My notes from Lisa Crosbie’s video *[Understand the AI reasoning model powering Copilot’s smartest features](https://www.youtube.com/watch?v=h0bbBDLWlGU)* (2025-05-05)\]

§1. What are **reasoning models** (aka. **research models**) and how do they differ from the (slightly) older **chat models**?
- Chat models are like enthusiastic interns.
- Reasoning models are like very experienced senior colleagues – figuring out how to solve a problem independently using chain-of-thought reasoning (step by step); essentially having a conversation with itself before reporting back to the user.

§2. The best way to prompt a chat model is by giving very **precise instructions**, and engaging in iterative conversation. The best way to prompt a reasoning model is to **write a brief** for a research paper, giving it a high-level goal.

§3. Consider the following prompt:

> I am looking at hospital data that shows that Victoria has noticably higher admissions for iron deficiency than other states in Australia. Can you help me understand why?

§4. When fed to the Chat GPT-4o chat model, the system immediately outputs a simple, shallow response. However, the GPT-o3 reasoning model spends over two minutes thinking and researching, as follows:

> Thinking ...
> Researching iron deficiency patterns ...
> Exploring the reasons for higher iron deficiency ...
> Refining the search ...
> Searching the web ...
> Evaluating regional variations ...
> Searching the web ...
> Considering possible explanations for higher admissions ...
> Searching the web ...
> Exploring potential reasons for higher admissions ...
> Searching the web ...
> Explaining iron deficiency anemia admissions in Victoria ...
> Searching the web ...
> Summarising possible factors for Victoria’s iron deficiency anemia admissions ...
> Searching the web ...
> Summarising findings on iron deficiency anemia in Victoria ...
> Searching the web ...
> Considering Victoria’s urbanisation ...
> Searching the web ...
> Considering key factors ...
> Searching the web ...

The end result is a thorough, properly researched report, with references.

§5. Consider now the following prompt:

> I need to plan a training session about AI. Where should I start?

§6. When fed into the GPT-4o model, the immediate output consists of generic suggestions. However, when fed into the GPT-o3 reasoning model, it spend around a minute searching and thinking:

> Thinking ...
> Planning an AI training session ...
> Looking up AI training resources ...
> Searching the web ...
> Looking for current AI resources ...
> Searching the web ...
> Searching for AI training resources ...

The output, even with such a generic prompt, is a detailed, high-quality, step-by-step, referenced roadmap.

§7. The suggested anatomy for a good reasoning model prompt is as follows:
1. goal
2. return format
3. warnings
4. context dump

§8. For example:

> I need to plan a training session about AI. Where should I start?
>
> The training session should run for 2 hours and I need to deliver it online to an audience of 10 senior leaders in the non-profit industry. They are not technical people, and need to understand the value to their organisation and mission as well as ethical considerations for using AI.
>
> Please provide me with training objectives, content, and timing.
>
> Be careful to make sure everything is up-to-date and accurate. Only include things that are ready for production use right now, not forthcoming features or ideas.
>
> For context, I am an experienced trainer and a specialist in non-profit technology. I know that most business leaders want practical strategies that will bring value. They don’t have money to waste. I know that there are also concerns about security, data privacy (particularly around sensitive supporter data) and change. The last time I ran a training session I did a great job explaining the tech and breaking it down but the feedback was I needed to address more around the security, privacy and responsible AI. I don’t want the session to be entirely dominated by that. I need to make sure the key concepts and capabilities and value for their industry is also well covered.

§9. These reasoning models underpin the <mark>Researcher</mark> and <mark>Analyst</mark> models in MS365 Copilot.

----

Back up to: [Copilot](index.md) | [LLMs](../index.md) | [AI](../../index.md)
