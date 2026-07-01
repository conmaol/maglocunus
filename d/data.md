# Data

Data is, in its essence, a web of relationships between entities in the world. Zooming in a bit, data can be seen as an aggregate of individual pieces of information, where each such ‘datum’ is a connection between two entities, and this connection represents some fact, measurement or observation about the world (ie. some ‘data point’).  

The following sentence encodes some simple data:

> Kate was born in Dunfermline on the second of November 1992.

This data can be represented in the following graph:

```mermaid
flowchart TD
    a([ ])
    b([Kate])
    c([1992-11-02])
    d([Dunfermline])
    a -- who --> b
    a -- when --> c
    a -- where --> d
```

The unlabelled root entity here represents a specific ‘birth event’, which took place on the date and in the town specified, and which involved a new person named ‘Kate’ entering the world. 

The idea that Kate’s birth is an ‘entity’, just like Kate herself is an entity, but that it is a special kind of entity known as an ‘event’ (ie. something that has happened), can be teased out by adding a couple of entity types to the graph:

```mermaid
flowchart TD
    e[event]
    f[birth]
    f -.-> e
    a -.-> f
    a([ ])
    b([Kate])
    c([1992-11-02])
    d([Dunfermline])
    a -- who --> b
    a -- when --> c
    a -- where --> d
```

We can read this graph as saying that there is an observed entity which is an instance of a ‘birth’, and that births are a kind of ‘event’.

Note that:
- Entities are represented by oblongs.
- Entity types are represented by rectangles.
- The connection between an entity and its type is a dotted line.
- The connection between two types is also a dotted line, with the source type being a subtype of the goal type, eg. births are a subtype of event.

\[start here\]

```mermaid
flowchart TD
    e[event]
    f[birth]
    f -.-> e
    a -.-> f
    a([ ])
    b([Kate])
    c([1992-11-02])
    d([Dunfermline])
    a -- who --> b
    a -- when --> c
    a -- where --> d
    g[female]
    h[person]
    b -.-> g
    g -.-> h
    i[date]
    j[time]
    c -.-> i
    i -.-> j
    k[town]
    d -.-> k
    l[place]
    k -.-> l
```

Add Mark.

----

Here is another instance of a datum:

> Kate was 33 years old on the twentieth of June 2006.

```mermaid
flowchart LR
    s1([age])
    p1([Kate])
    v1([33 years])
    d1([2026-06-20])
    s1 -- subject --> p1
    s1 -- date --> d1
    s1 -- value --> v1
```

stative datum?

This is a *derived* datum, derived formulaically from the event datum in the previous example. This is also a *quantitative* datum, involving a *count* of the number of birthdays the person has celebrated since birth.

Derived datum:

> Kate is (currently) 33 years old.

qualitative data, counting - the number of years that have passed since Kate was born. The number of birthdays she has celebrated.


Here is another example:

> Kate is 175cm tall.

Also:

> Kate is female.
>
> Kate has dark red hair.
>
> Kate has no tattoos.
>
> Kate likes Mark.

subject = Kate
attribute = birthdate, height, sex, hair colour, number of tattoos, likes
value = 1992-11-02, 175cm, female, dark red, 0, Mark 

types:
- quantitative datum (counts and measurements)
- qualitative datum
- categorical datum
- ordinal data (events?)
- derived datum - Kate is 33 years old. (ie. a formula)

----

## Shipman dataset

Shipman killed person X of age Y and gender Z in year W. 

```mermaid
flowchart LR
    p1([Hilda S.])
    e1([birth])
    d1([1917-06-15])
    e1 -- subject --> p1
    e1 -- date --> d1
    e2([death])
    d2([1985-02-03])
    e2 -- subject --> p1
    e2 -- date --> d2
    pp1[female]
    p1 -- isa --> pp1
```

mmm

```mermaid
flowchart TD

    ee3[event]
    ee1[birth]
    ee2[death]
    ee1 -.-> ee3
    ee2 -.-> ee3
    pp1[female]
    pp2[male]
    pp3[person]
    pp2 -.-> pp3
    pp1 -.-> pp3
    dd1[date]

    e1([ ])
    p1([Hilda S.])
    e1 -.-> ee1
    d1([1917-06-15])
    d1 -.-> dd1
    e1 --> p1
    e1 --> d1

    e2([ ])
    e2 -.-> ee2
    d2([1985-02-03])
    d2 -.-> dd1
    e2 --> p1
    e2 --> d2
    
    p1 -.-> pp1



```


mmm

```mermaid
flowchart LR
    p1([Hilda S.])
    y1([1985])
    p1 -- year of death --> y1
    a1([67])
    p1 -- age at death --> a1
    g1([female])
    p1 -- gender --> g1
```

mmm

```mermaid
flowchart LR
    p1([Hilda S.])
    y1([1985])
    p1 -- year --> y1
    a1([67])
    p1 -- age --> a1
    g1([female])
    p1 -- sex --> g1

    p2([Rebecca P.])
    y2([1988])
    p2 -- year --> y2
    a2([72])
    p2 -- age --> a2
    p2 -- sex --> g1

    p3([Robert M.])
    p3 -- year --> y1
    p3 -- age --> a2
    g2([male])
    p3 -- sex --> g2

```




----

Back up to: [Top](../index.md)
