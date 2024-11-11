# Me, Myself and I

## `I` and `me` as subjects and objects

`I` can be the subject of most finite verbs, whether transitive or intransitive, main or auxiliary:

> `I danced.`
> 
> `I loved Mary.`
>
> `I will dance.`
>
> `I will love Mary.`

`me` can be an object of most transitive verbs, whether finite or non-finite:

> `Mary loved me.`
>
> `Mary will love me.`

However, `I` *cannot* be an object of a transitive verb:

> `* Mary loved I.`
>
> `* Mary will love I.`

Similarly, `me` *cannot* be the subject of a finite verb:

> `* Me loved Mary.`
>
> `* Me will love Mary.`

## Morphosyntactic case

One way of capturing this is by assuming that English has the grammatical category of *case* – specifically a distintion between nominative and accusative nouns (and pronouns).

The subject pronoun `I` is lexically marked for nominative case:

> `(1) I : N[case:nom]`

The object pronoun `me` is lexically marked for accusative case:

> `(2) me : N[case:acc]`

And a proper noun like `Mary` is underspecified for case:

> `(3) Mary : N`

#### `danced`

An intransitive finite verb like `danced` lexically subcategorises for a (preceding) noun subject in the nominative case:

> `(4) [a] danced[b] : N[case:nom][a] <-sbj- V[mode:fin][b]`

`(1)` and `(4)` can be merged to yield the following structure for `I danced`:

> `I[a] danced[b] : N[case:nom][a] <-sbj- V[mode:fin][b]`

`(3)` and `(4)` can be merged to yield the following structure for `Mary danced`, since `N` and `N[case:nom]` can be merged:

> `Mary[a] danced[b] : N[case:nom][a] <-sbj- V[mode:fin][b]`

But `(2)` and `(4)` cannot be merged to yield a structure for `me danced` because of the clash between `N[case:acc]` in `(2)` and `N[case:nom]` in `(4)`.

#### `loved`

A transitive finite verb like `loved` lexically subcategorises for both a (preceding) noun subject in the nominative case, and a following noun object in the accusative case:

> `(5) [a] loved[b] [c] : N[case:nom][a] <-sbj- V[mode:fin][b] -obj-> N[case:acc][c]`

`(1)`, `(3)` and `(5)` can merge to yield the following structure for `I loved Mary`:

> `I[a] loved[b] Mary[c] : N[case:nom][a] <-sbj- V[mode:fin][b] -obj-> N[case:acc][c]`

Similarly, `(2)`, `(3)` and `(5)` can merge to yield the following structure for `Mary loved me`:

> `Mary[a] loved[b] me[c] : N[case:nom][a] <-sbj- V[mode:fin][b] -obj-> N[case:acc][c]`

But `(2)`, `(3)` and `(5)` cannot be merged to yield a structure for `Me loved Mary` because of the clash between `N[case:acc]` in `(2)` and `N[case:nom]` in `(5)`.

But `(1)`, `(3)` and `(5)` cannot be merged to yield a structure for `Mary loved I` because of the clash between `N[case:nom]` in `(1)` and `N[case:acc]` in `(5)`.

#### `will`

The auxiliary verb `will` lexically subcategorises for both a (preceding) noun subject in the nominative case and a infinitiva verb complement with an ‘understood’ subject controlled by the main subject:

> `(6) [a] will[b] [c] : N[case:nom][a][1] <-sbj- V[mode:fin][b] -xcomp-> V[mode:inf][c]) -sbj-> [1]`

And the two infinitival verb forms `dance` and `love` each lexically subcategorises for an understood subject:

> `(7) dance[a] : N[case:nom] <-sbj- V[mode:inf][a]` 
>
> `(8) love[a] [b] : N[case:nom] <-sbj- V[mode:inf][a] -obj-> N[case:acc][b]` 

`(6)` and `(7)` can merge to yield a ‘complex verbal’ structure for `will dance`:

> `[a] will[b] dance[c] : N[case:nom][a][1] <-sbj- V[mode:fin][b] -xcomp-> V[mode:inf][c] -sbj-> [1]`

And `(6)` and `(8)` can merge to yield a complex verbal structure for `will love`:

> `[a] will[b] love[c] [d] : N[case:nom][a][1] <-sbj- V[mode:fin][b] -xcomp-> (V[mode:inf][c] -sbj-> [1]) -obj-> N[case:acc][d]`

## Subcategorising pronouns

> `(9) I[a] [b] : N[a] <-sbj- V[mode:fin][b]`

> `(10) [a] me[b] : V[mode:fin][a] -obj-> N[n]`

> `(11) [a] danced[b] : N[a] <-sbj- V[mode:fin][b]`

> `(12) [a] loved[b] [c] : N[a] <-sbj- V[mode:fin][b] -obj-> N[c]`

Does this overgenerate? `Mary danced me`


----

## `me` and `myself` as objects

However, if the subject of the local clause is `I`, then `me` is not allowed as the object:

> `* I love me.`
>
> `* I will love me.`

[Exceptions? You love me, she loves me, but most of all I love me!]



----

> `Mary showed him me.`
>
> `Mary showed me them.`
>
> `Mary expects me to love her.`
>
> `* I love me.`
> 
> `* I showed him me.`
>
> `* I showed me them.`
>
> `* Mary showed me me.`
>
> `* I expect me to love Mary.`

Non-local subjects and objects are irrelevant though:

> `I think (that) Mary loves me.`
>
> `Mary told me (that) she loves me.`
>
> `I expect Mary to love me.`


## Subjects of finite verbs

#### `I`

`I` can be the subject of a finite verb, except for present tense verbs ending in `-s`:

> `I love Mary.`
>
> `I will love Mary.`
>
> `* I loves Mary.`

This is true for embedded finite verbs too:

> `I think (that) I love Mary.`

#### `me`

`me` *cannot* be the subject of a finite verb:

> `* Me loves Mary.`
>
> `* Me will love Mary.`
>
> `* I think (that) me love(s) Mary.`

#### `myself`

`myself` cannot be the subject of a finite verb:

> `* Myself loves Mary.`
>
> `* Myself will love Mary.`
>
> `* I think (that) myself love(s) Mary.`

## Objects of transitive verbs

#### `I`

`I` *cannot* be an object of a transitive (or ditransitive) verb:

> `* Mary loves I.`
>
> `* Mary showed him I.`
>
> `* Mary showed I them.`

#### `me`

`me` can be an object of a transitive (or ditransitive) verb, as long as the (local) subject is not `I` and as long as a preceding (local) object is not also `me`:

> `Mary loves me.`
>
> `Mary showed him me.`
>
> `Mary showed me them.`
>
> `Mary expects me to love her.`
>
> `* I love me.`
> 
> `* I showed him me.`
>
> `* I showed me them.`
>
> `* Mary showed me me.`
>
> `* I expect me to love Mary.`

Non-local subjects and objects are irrelevant though:

> `I think (that) Mary loves me.`
>
> `Mary told me (that) she loves me.`
>
> `I expect Mary to love me.`

#### `myself`

`myself` can be the object of a transitive (or ditransitive) verb, as long as the (local) subject is `I` or a preceding (local) object is `me` (or `myself`):

> `I love myself.`
>
> `I showed myself them.`
>
> `I showed them myself.`
>
> `Mary showed me myself.`
>
> `I showed myself myself.`
>
> `I expect myself to love Mary.`
>
> `I expect to love myself.`
>
> `I expect myself to love myself.`
>
> `Mary expects me to love myself.`
>
> `* Mary loves myself.`
>
> `* Mary showed myself them.`
>
> `* Mary showed them myself.`
>
> `* Mary showed myself me.`
>
> `* I expect Mary to love myself.`

Non-local subjects and objects are irrelevant:

> `* I think (that) Mary loves myself.`
>
> `* Mary told me (that) she loves myself.`

## Objects of prepositions

#### `I`

`I` *cannot* be the object of a preposition:

> `* Mary relies on I.`
>
> `* Mary showed him to I.`

#### `me`

`me` can be the object of a preposition, as long as the subject of the (local) verb is not `I`, and as long as an object of the (local) verb is not `me`:

> `Mary relies on me.`
>
> `Mary showed him to me.`
> 
> `* I rely on me.`
>
> `* I showed him to me.`
>
> `* Mary showed me to me.`

#### `myself`

`myself` can be the object of a preposition, as long as the subject of the (local) verb is `I`, or ...:

> `I rely on myself.`
>
> `I showed Mary myself.`
>
> `Mary showed me myself.`





> `* Mary relies on myself.`


I showed myself to Mary.


? I showed Mary to myself.


? Mary showed me to myself




----

`I` can be the final conjunct in a conjoined subject (at least in careful usage):

> `John and I love Mary.`
>
> `* I and John love Mary.`
>
> `* Mary loves John and I.`
>
> `* Mary relies on John and I.`

`I` can be the complement of the comparative words `than` and `as` (in very careful, perhaps archaic, usage):

> `? John is older than I.`
>
> `? John is as old as I.`



---

`me` can be the final conjunct in a conjoined object or complement:

> `Mary loves John and me.`
>
> `Mary relies on John and me.`

But not in a conjoined subject in careful usage:

> `? John and me love Mary.`
>
> `? Me and John love Mary.`

`me` can be the complement of the comparative words `than` and `as`, in normal usage:

> `John is older than me.`
>
> `John is as old as me.`

---

`* My sister invited myself.`








