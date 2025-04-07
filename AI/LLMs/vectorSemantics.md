# Vector semantics

§1. Given vocabulary V of words, a document over V is a finite sequence D = <w1, w2, …, wn> where every wi in D is in V.

And a corpus over V is a finite set of documents over V.

Given vocabulary V and corpus C over V, the meaning of document D in C is the function f from V to N such that f(w) is the number of times word w occurs in D. 

Given vocabulary V and corpus C over V, the macro-level meaning of word w in V is the function f from C to N such that f(D) is the number of times w occurs in document D.

Given vocabulary V and corpus C over V, the micro-level meaning of word w1 in V is the function f from V to N such that f(w2) is the number of times w2 occurs within four words of w1 in (some document in) C. 

Note that if the meaning of w1 is f and f(w2) = n then the meaning of w2 is g where g(w1) = n. 

same word?


----

Back up to: [LLMs](index.md)