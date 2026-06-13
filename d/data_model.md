# Data models

A `data model` is a set of generic statements describing some aspect of the world.

For example, here is a simple informal data model describing some aspects of the academic world:
> Every person has a name and is either a student or a teacher.
>
> Every student has a date of birth.
>
> Students take courses and teachers teach them.
>
> Every course has a title, and runs within an academic year.

This data model contains a few distinct types of `entity`:
- *Students* and *teachers* are different kinds of *person*.
- *Courses* are a kind of *event*.

These entities are associated with particular `attributes`:
- People have *names*.
- Students have *dates of birth*.
- Events occur within *academic years*.
- Courses have *titles*.

Finally, this data model assumes two different `relations` between entities:
- Teachers *teach* courses.
- Students *take* courses.

### Class diagrams

There are many different ways of formalising a data model. For example, we could draw a `class diagram`:

```mermaid
classDiagram
    person <|-- student
    person <|-- teacher
    class person { name }
    class student { date of birth }
    event <|-- course
    class event {
        academic year
    }
    class course {
        title
    }
    teacher --> course : teaches
    student --> course : takes
```

In this diagram, each type of entity (or ‘class’ of ‘object’) is represented by its own tripartite box, with the name of the entity type in the top part of the box. The diagram contains five boxes representing the entity types ‘person’, ‘student’, ‘teacher’, ‘event’, and ‘course’.

The unlabelled arrows between entity types represent the ‘inheritance’ or ‘subtype’ relation, so:
- Every student is a person.
- Every teacher is a person.
- Every course is an event.

The middle part of each box represents the attributes associated with the entity type, so:
- Every person has a name.
- Every student has a date of birth.
- Every event happens within an academic year.
- Every course has a title.

If entity type *A* is a subtype of entity type *B*, and *B* has an associated attribute, then *A* ‘inherits’ that attribute from *B*, for example:
- Every student is a person, and every person has a name, so every student also has a name.

The labelled arrows between entity types represent relations, so:
- Teachers teach courses.
- Students take courses.

### Entity-relationship diagrams

Another way of formalising a data model is by drawing an `entity-relationship diagram`:

```mermaid
erDiagram
    course }|--|{ student : takes
    course }|--|| teacher : teaches
    course { YYYY academicYear }
    student {
        String name
        YYYY-MM-DD dateOfBirth
    }
    teacher {
        String name
    }
```

As with class diagrams, in an entity-relationship diagram every entity type is represented by a box.



no subtypes

but cardinality


----
mmmm

```mermaid
---
title: Order example
---
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```



### Formal data models – logics


---

Also known as an ontology (or schema?)


----

Back up to: [Top](../index.md)
