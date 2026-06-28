# Data

The word *data* is the plural form of the singular noun *datum*. 

Data is essentially an aggregate of objects each of which is an individual datum. A datum can be thought of as an item of information, a data point, a fact, a measurement, or an observation.

The following sentence encodes two data:

> Kate was born on the second of November 1992.

This is an *event* datum, capturing the event of someone being born (and this birth’s location in time), presumably as observed and recorded by a medical professional. The event has a type (*birth*), a subject (*Kate*), and a date (1992-11-02). 

```mermaid
flowchart LR
    e1([birth])
    p1([Kate])
    d1([1992-11-02])
    e1 -- subject --> p1
    e1 -- date --> d1
```

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
