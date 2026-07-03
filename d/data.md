# Data

Data is, from the outside, a web of relationships between entities in the world. Zooming in a bit, data can be seen as an aggregate of individual pieces of information. Each such *datum* (or data *point*) is a connection between two entities, and this connection represents some fact, measurement or observation about the world.  

The following sentence encodes some simple data:

> Kate was born in Dunfermline on the second of November 1992.

This data can be represented as a graph, consisting of entities and relationships:

```mermaid
flowchart TD
    a([birth])
    b(["`**Kate** person`"])
    c(["`**1992-11-02** date`"])
    d(["`**Dunfermline** town`"])
    a -- who --> b
    a -- on --> c
    a -- in --> d
```

The root entity here represents a specific *birth event*, which took place *on* the date and *in* the town specified, and which involved a new person named ‘Kate’ entering the world. 

Note that Kate’s birth can be viewed as an entity in our world, much like Kate herself is an entity in our world. A birth is a special kind of entity known as an *event* – something that has happened. Other *entity types* represented in the data graph are *person*, *date* and *town*.

To summarise:

> Data consists of relationships between events, people, places, times, and other types of entity.

We can expand this simple data graph by adding more entities and more relationships:

```mermaid
flowchart TD
    a([birth])
    b(["`**Kate** person`"])
    c(["`**1992-11-02** date`"])
    d(["`**Dunfermline** town`"])
    a -- who --> b
    a -- on --> c
    a -- in --> d
    aa([birth])
    bb(["`**Marek** person`"])
    cc(["`**1977-01-23** date`"])
    dd(["`**Kirkcaldy** town`"])
    aa -- who --> bb
    aa -- on --> cc
    aa -- in --> dd
    e(["`**Fife** county`"])
    d -- in --> e
    dd -- in --> e
    ccc(["`**1977-01-24** date`"])
    cc -- next --> ccc
    cccc(["`**1992-11-01** date`"])
    cccc -- next --> c
    ccc -.-> cccc
```

Note that, while there are two entities in this data graph labelled ‘birth’, these are not the same entity. Kate’s birth and Marek’s birth were two distinct events, happening at different times and in different places. But they were distinct events of the same type, as both were *births*. 

We can see from this data graph that Kate and Marek may have been born in different years and in different town, but they were both born in the same county. It is also clear that Marek was born before Kate, with dates being ordered by the ‘next’ relationship. The dotted line between certain pairs of dates indicates that there are lots of intervening dates and links between the two.

Fundamentally, this is all there is to data. It consists of entities of different types, connected by relationships of different kinds, all linked up in a web of information about the world. 

## Distilled data

Here is a *distilled* version of the data graph from above, where many of the entities and relationships have been excised or relabelled, allowing us to focus on just a few aspects:

```mermaid
flowchart TD
    bb(["`**Marek** person`"])
    cc(["`**1977-01-23** date`"])
    bb -- date of birth --> cc
    b(["`**Kate** person`"])
    c(["`**1992-11-02** date`"])
    b -- date of birth --> c
    cc -- precedes --> c
```

This data graph zooms in on just the people and their dates of birth. We can add more instances as needed:

```mermaid
flowchart TD
    bb(["`**Marek** person`"])
    cc(["`**1977-01-23** date`"])
    bb -- date of birth --> cc
    bbb(["`**Lee** person`"])
    ccc(["`**1992-06-26** date`"])
    bbb -- date of birth --> ccc
    b(["`**Kate** person`"])
    c(["`**1992-11-02** date`"])
    b -- date of birth --> c
    bbbb(["`**Alex** person`"])
    cccc(["`**2001-03-25** date`"])
    bbbb -- date of birth --> cccc
    cc -- precedes --> ccc
    ccc -- precedes --> c
    c -- precedes --> cccc
```

This graph is equivalent to the following data table:

| name  | date of birth |
| ----- | ------------- |
| Marek | 1977-01-23    |
| Lee   | 1992-06-26    |
| Kate  | 1992-11-02    |
| Alex  | 2001-03-25    |

give diagrams names

## Derived data

We can take the data above and *derive* a new data graph from it. 

```mermaid
flowchart TD
    bb(["`**Marek** person`"])
    cc(["`**49** date`"])
    bb -- age --> cc
    bbb(["`**Lee** person`"])
    ccc(["`**34** date`"])
    bbb -- age --> ccc
    b(["`**Kate** person`"])
    c(["`**33** date`"])
    b -- age --> c
    bbbb(["`**Alex** person`"])
    cccc(["`**25** date`"])
    bbbb -- age --> cccc
    cc -- precedes --> ccc
    ccc -- precedes --> c
    c -- precedes --> cccc
```


| name  | age |
| ----- | --- |
| Marek | 49  |
| Lee   | 34  |
| Kate  | 33  |
| Alex  | 25  |

numerical / quantitative data



## A simple numerical dataset


```mermaid
flowchart LR
    subgraph people
        a(["`**Alex**`"])
        k(["`**Kate**`"])
        l(["`**Lee**`"])
        m(["`**Marek**`"])
    end
    subgraph ages
        x24(["`**24**`"])
        x25(["`**25**`"])
        x26(["`**26**`"])
        x27(["`**27**`"])
        x28(["`**28**`"])
        x29(["`**29**`"])
        x30(["`**30**`"])
        x31(["`**31**`"])
        x32(["`**32**`"])
        x33(["`**33**`"])
        x34(["`**34**`"])
        x35(["`**35**`"])
        x54(["`**54**`"])
        x55(["`**55**`"])
        x56(["`**56**`"])
    end
    x24 --> x25
    x25 --> x26
    x26 --> x27
    x27 --> x28
    x28 --> x29
    x29 --> x30
    x30 --> x31
    x31 --> x32
    x32 --> x33
    x33 --> x34
    x34 --> x35
    x35 -.-> x54
    x54 --> x55
    x55 --> x56
    a -- age --> x25
    k -- age --> x33
    l -- age --> x34
    m -- age --> x55
```




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
