# Vector semantics

Contents:
- [Lexical semantics](#lexical-semantics)
- [Vector semantics](#vector-semantics)
- [Words and vectors](#words-and-vectors)
- [Cosine for measuring similarity](#cosine-for-measuring-similarity)
- [TF-IDF: Weighing terms in the vector](#tf-idf-weighing-terms-in-the-vector)
- [PMI: Pointwise Mutual Information](#pmi-pointwise-mutual-information)
- [Applications of the tf-idf or PPMI vector models](#applications-of-the-tf-idf-or-ppmi-vector-models)
- [Word2vec](#word2vec)

§0.1. The <mark>distributional hypothesis</mark> – words that occur in similar contexts have similar meanings.

§0.2. <mark>Vector semantics</mark> – we can learn representations of the meanings of words (aka. ‘embeddings’) directly from their distributions in texts.

§0.3. Vector semantics is an example of <mark>representation learning</mark> – automatically learning useful representations of an input text via self-supervised methods, rather than manually using feature-engineering. 

## Lexical semantics

§1.1. 

Back up to: [Top](#)

## Vector semantics

§2.1. The meaning of a word can be represented as a point (vector) in a multi-dimensional semantic space that is derived from the distributions of its word neighbours.

§2.2. Vectors for representing words are often called ‘embeddings’.

Back up to: [Top](#)

## Words and vectors

§3.1. Vector models of meaning are generally based on a <mark>co-occurrence matrix</mark> – a way of representing how often words co-occur.

### Vectors and documents

§3.2. Given vocabulary $V$ (of words/terms/tokens):
- A <mark>document</mark> over $V$ is a finite sequence $w_1w_2...w_n$ where every $w_i$ is in $V$.
- A <mark>corpus</mark> over  $V$ is a finite set of documents over $V$.

§3.3. Given vocabulary $V$ and document $D$ over $V$, the <mark>meaning</mark> of $D$, written $\Vert D\Vert$, is the function from $V$ to $\mathbb{N}$ defined as follows:
- $\Vert D\Vert(w)$ is the number of times word $w$ occurs in $D$. 

§3.4. The meaning of a document can be represented as a column in a <mark>term-document matrix</mark> — a table where every row represents a word in the vocabulary, every column represents a different document in the corpus, and every cell contains the number of times the relevant word occurs in the relevant document. 

§3.5. The meaning of a document can also be represented as a <mark>semantic vector</mark> — a sequence of non-negative integers read off top-to-bottom from the relevant column in the term-document matrix.

§3.6. An <mark>information retrieval</mark> system is a computer (program) which takes in two inputs — a corpus of documents over some vocabulary $V$ and a query $Q$ (sequence, document) over $V$ — and returns the corpus ordered by <mark>similarity</mark> to $Q$. This is done by converting each document and the query into semantic vectors, and then comparing these vectors for similarity.

### Document dimensions

§3.7. Given vocabulary $V$, word $w$ over $V$, and corpus $C$ over $V$, the <mark>macro-meaning</mark> of $w$ in $C$, written $\Vert w\Vert^C$, is the function from $C$ to $\mathbb{N}$ defined as follows:
- $\Vert w\Vert^C(D)$ is the number of times $w$ occurs in document $D$ in $C$. 

§3.8. The macro-meaning of a word can be represented as a *row* in a term-document matrix. It can also be represented as a semantic vector read off from that row, from left to right. In this way, the meaning of a word can be represented by the documents it tends to occur in.

### Word dimensions

§3.9. Given vocabulary $V$, word $w$ over $V$, and corpus $C$ over $V$, the <mark>micro-meaning</mark> of $w$ in $V$ wrt. $C$, written $\Vert w\Vert^C$, is the function from $V$ to $\mathbb{N}$ defined as follows:
- $\Vert w\Vert^C(u)$ is the number of times word $u$ occurs in the context (eg. within four words) of $w$ in (some document in) $C$.

§3.10. Note that for every vocabulary $V$, words $w$, $u$ over $V$, and corpus $C$ over $V$:
- $\Vert w\Vert^C(w)$ is undefined.
- $\Vert w\Vert^C(u)=\Vert u\Vert^C(w)$.

§3.11. The micro-meaning of a word can be represented as a row in a (sparse) <mark>term-term matrix</mark> — a table where every row and every column represents a word in the vocabulary, and every cell contains the number of times the relevant words occur within each others’ context. This can also be represented as a semantic vector — a sequence of non-negative integers read off left-to-right from the relevant row in the term-term matrix.

Back up to: [Top](#)

## Cosine for measuring similarity

§4.1. The <mark>dot product</mark> (or ‘inner’ product) is a simple similarity measure between two vectors of the same dimensionality, whether both vectors represent documents or words:
- $v\cdot w = v_1w_1 + v_2w_2 + ... + v_nw_n$

§4.2. The dot product of two vectors tends to be high just when the two vectors have large values in the same dimensions. However, the raw dot product favours vectors of high magnitude (ie. points far from the origin), and hence overemphasises more frequent words.

§4.3. We can normalise the dot product for vector magnitude by dividing it by the magnitudes of each of the two vectors, which is identical to the cosine of the angle between the two vectors:
- $\frac{v\cdot w}{|v||w|} = \cos\theta$

§4.4. Thus, the degree of similarity between documents $D$ and $E$ over vocabulary $V$ is defined as the cosine of the angle between (the semantic vectors underlying) $\Vert D\Vert$ and $\Vert E\Vert$. This is a real number between $0$ (orthogonal) and $1$ (identical).

§4.5. Similarly, the degree of similarity between words $w$ and $u$ over vocabulary $V$ in corpus $C$ over $V$ is defined as the cosine of the angle between (the semantic vectors underlying) $\Vert w\Vert^C$ and $\Vert w\Vert^C$.

Back up to: [Top](#)

## TF-IDF: Weighing terms in the vector

§5.1. Raw frequency is, on its own, not the best measure of association between words and documents, because of the following paradox:
- Words that appear frequently are certainly more important than words that appear once or twice.
- But words that are too frequent are usually unimportant. 

§5.2. With this in mind, we can redefine the notion of document meaning presented in §3.3 to weight the raw counts in the cells of the term-document matrix — 

Given vocabulary $V$, corpus $C$ over $V$, and document $D$ in $C$, $\Vert D\Vert$ is the function from $V$ to (non-negative) $\mathbb{R}$ defined as follows:
- $\Vert D\Vert(w)$ is the product of the <mark>term frequency</mark> of $w$ in $D$ and the <mark>inverse document frequency</mark> of $w$ in $C$, where
  - the term frequency of $w$ in $D$ is the number of times $w$ occurs in $D$
  - the inverse document frequency of $w$ in $C$ is the quotient of the number of documents in $C$ and the number of distinct documents in $C$ that $w$ occurs within
  - both the term frequency and the inverse document frequency are generally ‘squashed’ using one of the following smoothed $\log_{10}$ functions:
    - if $x$ is $0$: $0$; otherwise $1+\log_{10}x$
    - $\log_{10}x+1$

§5.3. The squashing function is useful because even if one word is 100 times more frequent in a document than another word, then this does not mean it is 100 times more important to the meaning of the document.

Back up to: [Top](#)

## PMI: Pointwise Mutual Information

§6.1. Positive PMI is used to weight term-term matrices – the best way to weight the association between two words is to ask how much more the two words co-occur in the corpus than we would have a priori expected them to appear by chance.

Back up to: [Top](#)

## Applications of the tf-idf or PPMI vector models

§7.1. Document similarity (using tf-idf) is useful for: IR; plagiarism detection; news recommender systems; and digital humanities textual scholarship (eg. comparing different versions).

§7.2. Word similarity (using either tf-idf or PPMI) is useful for: finding word paraphrases; tracking changes in word meaning; or automatically discovering meanings of words in different corpora.

Back up to: [Top](#)

## Word2vec

§8.1.

Back up to: [Top](#)


----






----

Back up to: [LLMs](index.md)
