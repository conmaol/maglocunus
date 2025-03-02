# Generative AI vs. Traditional AI

\[My notes from LinkedIn Learning course *Generative AI vs. Traditional AI* by Doug Rose (2023)\]


## Main points

§1. <mark>Generative AI</mark> builds on decades of work in <mark>Predictive AI</mark>.

§2. There is not ‘one big AI’ – AI is ‘just a set of tools’ built to solve specific problems.

§3. Predictive AI uses <mark>Machine Learning</mark> algorithms (typically <mark>Artificial Neural Networks</mark>) to get more value from massive amounts of data, by *generalising* over past events/behaviour and hence *predicting* future events/behaviour.

§4. There are two different kinds of Machine Learning algorithm used in Predictive AI:
- <mark>Supervised learning</mark> algorithms are *trained* to *classify* inputs according to a predetermined classification.
- <mark>Unsupervised learning</mark> algorithms *cluster* inputs and hence create their own classification.

§5. Artificial Neural Networks (ANNs) are Machine Learning algorithms that are inspired by the (low-level) architecture of the human brain.

§6. <mark>Deep learning</mark> ANNs are ANNs with lots of ‘layers’. 

§7. *Google Brain* (2011) is an unsupervised deep learning ANN that found patterns in (ie. clustered) still images from YouTube. This kind of AI led to the development of *Generative AI*, which could use these clusters/patterns to create brand new images.

§8. An ML <mark>model</mark> is an abstraction (generalised knowledge) that maps known data to something new (via training).

§9. A trained model is good for a specific task but is not flexible – this is a problem for Generative AI.

§10. A Generative AI is usually based on a <mark>Foundation Model</mark> – a model trained on broad data which can be adapted to a wider range of downstream tasks.

§11. A <mark>Large Language Model</mark> (LLM) is a kind of Foundation Model, trained on texts (collections of words) – a ‘stochastic parrot’.

§12. An <mark>Image Diffusion Model</mark> is another kind of Foundation model, trained by destroying (blurring) millions of images and trying to recreate (unblur) them (eg. DALL-E 2, Stable Diffusion).

§13. <mark>Generative Pre-trained Transformer</mark> (GPT) is an LLM built by OpenAI and used by ChatGPT. A transformer transforms a group of words into something different, via encoding and decoding.


Some other things to learn about:
- self-supervised learning

- auto-encoding

## Summary

> An **artificial intelligence** (AI) is a ‘fancy’ (cutting edge, technologically advanced) computer.
>
> A **predictive AI** is an AI which ...
>
> A **generative AI** is a predictive (?) AI which ...
>
> A **machine learning (ML) algorithm** is a computer which ...
>
> An **artificial neural network** (ANN) is an ML algorithm which ...
>
> A **supervised ML algorithm** is an ML algorithm which classifies.
>
> An **unsupervised ML algorithm** is an ML algorithm which clusters.
>
> A **deep learning** ANN is an ANN which has lots of layers.



A <mark>classifier</mark> is a computer (program) which decides which of a small set of predefined output classes the input belongs to.
- A <mark>binary classifier</mark> is a classifier with just two output classes (eg. `True` and `False`).
- A classifier is also known as a ‘predictive AI’, under the assumption that the output classes are predictions of future events or states.

A <mark>machine learning system</mark> is a computer (program) which builds classifiers. It takes in a collection of inputs, and then outputs a (trained) classifier.

A <mark>supervised learning system</mark> is a machine learning system whose input is <mark>pre-classified</mark>.

An <mark>unsupervised learning system</mark> (or a ‘clusterer’) is a machine learning system whose input is <mark>unclassified(/mark).


----

Back up to: [Artificial intelligence](../index.md)
