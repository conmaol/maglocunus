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

## Word embeddings

§7. Given vocabulary $V$ and corpus $C$ over $V$, the <mark>meaning of word</mark> $w_1$ in $V$ wrt. $C$, written $\Vert w_1\Vert^C$, is the function from $V$ to $V$ defined as follows:
- $\Vert w_1\Vert^C(w_2)$ is the number of times word $w_2$ occurs in the context (eg. within four words) of $w_1$.


Given vocabulary V and corpus C over V, the micro-level meaning of word w1 in V is the function f from V to N such that f(w2) is the number of times w2 occurs within four words of w1 in (some document in) C. 

Note that if the meaning of w1 is f and f(w2) = n then the meaning of w2 is g where g(w1) = n. 

same word?


----

Back up to: [LLMs](index.md)
