# Vector semantics

§1. Given vocabulary $V$ of words:
- a <mark>document</mark> over $V$ is a finite sequence $D = w_1w_2...w_n$ where every $w_i$ in $D$ is in $V$
- a <mark>corpus</mark> over  $V$ is a finite set of documents over $V$.

§2. Given vocabulary $V$ and corpus $C$ over $V$, the <mark>meaning</mark> of document $D$ in $C$, written $\Vert D\Vert$, is the function from $V$ to $N$ defined as follows:
- $\Vert D\Vert(w)$ is the number of times word $w$ occurs in $D$. 

§3. The meaning of a document can be represented as a column in a <mark>term-document matrix</mark> — a table where every row represents a word in the vocabulary, every column represents a different document in the corpus, and every cell contains the number of times the relevant word occurs in the relevant document. 

§4. The meaning of a document can also be represented as a <mark>semantic vector</mark> — a sequence of non-negative integers read off top-to-bottom from the relevant column.



Given vocabulary V and corpus C over V, the macro-level meaning of word w in V is the function f from C to N such that f(D) is the number of times w occurs in document D.

term-document matrices


Given vocabulary V and corpus C over V, the micro-level meaning of word w1 in V is the function f from V to N such that f(w2) is the number of times w2 occurs within four words of w1 in (some document in) C. 

Note that if the meaning of w1 is f and f(w2) = n then the meaning of w2 is g where g(w1) = n. 

same word?


----

Back up to: [LLMs](index.md)
