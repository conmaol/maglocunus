# How to Build an Agent in MS365 Copilot Chat

\[My notes from Lisa Crosbie’s video *[How to Build an Agent in MS365 Copilot Chat](https://www.youtube.com/watch?v=X5IX46KsL9M)*\]

§1. In MS365 Chat (paid, pro edition), click <mark>Create an agent</mark> on RHS –
- Copilot Studio ‘My agents > My Copilot Agent’ window appears, with two tabs: **Describe**, **Configure**.

§2. The <mark>Describe</mark> tab allows you to create an agent using natural language, by providing:
- a description – the purpose (reason for being) of the agent
- some <mark>instructions</mark> about how the should behave, what it should do (and not do) in responding to users, and what kinds of knowledge it should use
- perhaps also a **persona** and some **examples**

§3. Here is an example description:

> You are a policy helper agent. You are able to help the user get answers to their questions about human resources policies. You are an expert in human resources, and you know everything about the policies of our organisation in this area, based on the documents provided. You will provide advice in an accurate, professional and friendly manner. You will be able to answer questions about leave, performance management, health and safety, and other matters relating to employee wellbeing and success at work.

§4. In response, Copilot Studio may ask you some questions in order to <mark>refine</mark> the instructions. It will also show the generated agent on the RHS, complete with some suggested prompts for the user.

> Please provide answers in a clear bullet point summary format and offer step-by-step guidance where it makes sense to do so.
> 
> Please only provide answers found in the knowledge provided. If you do not know the answer, please tell the user to contact their HR representative.

§5. The <mark>Configure</mark> tab offers a way of providing or refining the name, description, instructions, knowledge and starter prompts more directly via a form.
- The knowledge sources specified can be URLs or folders or documents on Sharepoint sites.
- There is a toggle to allow or disallow web search when answering questions.

§6. In future, you will also be able to specify <mark>actions</mark>, like sending an email (currently only found in full version of Copilot Studio).

§7. When you are done configuring, click the **Create** button.

§8. 

----

Back up to: [Copilot](index.md) | [LLMs](../index.md) | [AI](../../index.md) | [Tangator](../../../index.md)
