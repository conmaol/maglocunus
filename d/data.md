# Data

Data is, essentially, a web of relationships between entities in the world. Zooming in a bit, data can be seen as an aggregate of individual pieces of information. Each such *datum* (or data *point*) is a connection between two entities, and this connection represents some fact, measurement or observation about the world.  

The following sentence encodes some simple data:

> Kate was born in Dunfermline on the second of November 1992.

This data can be represented as a graph, consisting of entities and connections:

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

The unlabelled root entity here represents a specific *birth event*, which took place on the date (the *when*) and in the town (the *where*) specified, and which involved a new person named ‘Kate’ (the *who*) entering the world. 

Note that Kate’s birth can be viewed as an entity in our world, much like Kate herself is an entity in our world. A birth is a special kind of entity known as an *event* – something that has happened. We can represent this in our data graph by adding *entity types*:

```mermaid
flowchart TD
    e[event]:::type
    f[birth]:::type
    f -.-> e
    a -.-> f
    a([ ])
    b([Kate])
    c([1992-11-02])
    d([Dunfermline])
    a -- who --> b
    a -- when --> c
    a -- where --> d
    classDef type fill:#f9f;
```

Entity types are represented as rectangles, but entities themselves are represented as oblongs. The connection between an entity and its type is a dotted line. The connection between two types is also a dotted line, with one being a subtype of the other, eg. births are a subtype of event.

We can read the data graph above as saying that what happened to Kate in Dunfermline in 1992 was an instance of a *birth*, and that births are a kind of *event*.

We can add other relevant entity types to the data graph as well:

```mermaid
flowchart TD
    e[event]:::type
    f[birth]:::type
    f -.-> e
    a -.-> f
    a([ ])
    b([Kate])
    c([1992-11-02])
    d([Dunfermline])
    a -- who --> b
    a -- when --> c
    a -- where --> d
    g[female]:::type
    h[person]:::type
    b -.-> g
    g -.-> h
    i[date]:::type
    c -.-> i
    k[town]:::type
    d -.-> k
    classDef type fill:#f9f;
```

Let’s add another birth event to the data graph:

```mermaid
flowchart LR
    e[event]:::type
    f[birth]:::type
    f -.-> e
    a -.-> f
    a([ ])
    b([Kate])
    c([1992-11-02])
    d([Dunfermline])
    a -- who --> b
    a -- when --> c
    a -- where --> d
    g[female]:::type
    h[person]:::type
    b -.-> g
    g -.-> h
    i[date]:::type
    c -.-> i
    k[town]:::type
    d -.-> k
    classDef type fill:#f9f;
    aa -.-> f
    aa([ ])
    bb([Mark])
    cc([1977-01-23])
    dd([Kirkcaldy])
    aa -- who --> bb
    aa -- when --> cc
    aa -- where --> dd
    gg[male]:::type
    bb -.-> gg
    gg -.-> h
    dd -.-> k
    cc -.-> i
```

Dunfermline and Kdy are both in Fife, in Scotland.

The dates are ordered to each other.

The dates are in years?


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
