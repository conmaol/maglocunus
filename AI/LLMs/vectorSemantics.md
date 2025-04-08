# Vector semantics

§1. Given vocabulary $V$ of words:
- a <mark>document</mark> over $V$ is a finite sequence $D = w_1w_2...w_n$ where every $w_i$ in $D$ is in $V$
- a <mark>corpus</mark> over  $V$ is a finite set of documents over $V$.

## Document embeddings — information retrieval

§2. Given vocabulary $V$ and corpus $C$ over $V$, the <mark>meaning of document</mark> $D$ in $C$, written $\Vert D\Vert$, is the function from $V$ to $N$ defined as follows:
- $\Vert D\Vert(w)$ is the number of times word $w$ occurs in $D$. 

§3. The meaning of a document can be represented as a column in a <mark>term-document matrix</mark> — a table where every row represents a word in the vocabulary, every column represents a different document in the corpus, and every cell contains the number of times the relevant word occurs in the relevant document. 

§4. The meaning of a document can also be represented as a <mark>semantic vector</mark> — a sequence of non-negative integers read off top-to-bottom from the relevant column.

§5. The degree of <mark>similarity</mark> between document $D_1$ and $D_2$ over vocabulary $V$ is defined as the cosine of the angle between (the semantic vectors underlying) $\Vert D_1\Vert$ and $\Vert D_2\Vert$. This is a real number between $0$ (orthogonal) and $1$ (identical).

§6. An <mark>information retrieval</mark> system is a computer (program) which takes in two inputs — a corpus of documents over some vocabulary $V$, and a query $Q$ (sequence, document) over $V$ — and returns the corpus ordered by similarity to $Q$.

## TF-IDF weighting

§7. Raw frequency is not the best measure of association between words and documents:
- Words that appear frequently are more important than words that appear once or twice.
- But words that are too frequent are unimportant. 

§8. With this in mind, we can redefine the notion of document meaning presented in §2 to weight the raw counts — Given vocabulary $V$, corpus $C$ over $V$, and document $D$ in $C$, $\Vert D\Vert$ is the function from $V$ to $N$ defined as follows:
- $\Vert D\Vert(w)$ is product of the `squashed‘ <mark>term frequency</mark> of $w$ wrt. $D$ and the <mark>inverse document frequency</mark> of $w$ wrt. $C$, where
- the squashed term frequency of $w$ wrt. $D$ is the $\log_{10}$ of the number of times $w$ occurs in $D$, and
- the inverse document frequency of $w$ wrt. $C$ is the $\log_{10}$ of the quotient of the number of documents in $C$ and the number of distinct documents in $C$ that $w$ occurs within. 







Squashed using the log10 function. 

If count = 0, tf = 0; otherwise 1 + log10 count

Or log10 count+ 1

Df is the number of different documents a term occurs in.

Inverse df is number of docs in corpus divided by the df.

Often squashed using log10. 

Tf-idf = tf . Idf 

## Word embeddings

§7. Given vocabulary $V$ and corpus $C$ over $V$, the <mark>meaning of word</mark> $w_1$ in $V$ wrt. $C$, written $\Vert w_1\Vert^C$, is the function from $V$ to $N$ defined as follows:
- $\Vert w_1\Vert^C(w_2)$ is the number of times word $w_2$ occurs in the context (eg. within four words) of $w_1$ in (some document in) $C$.

§8. Note that for every vocabulary $V$, words $w_1$, $w_2$ over $V$, and corpus $C$ over $V$:
- $\Vert w_1\Vert^C(w_1)$ is undefined.
- $\Vert w_1\Vert^C(w_2)=\Vert w_2\Vert^C(w_1)$.




----

Back up to: [LLMs](index.md)
