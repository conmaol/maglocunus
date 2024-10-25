# Data model components

This document contains my notes from Chapter 5 §1.3.3 of the *Data Management Body of Knowledge* 2nd edition (DAMA-DMBoK 2017).

Most data models contain the same basic building blocks:
- entities
- relationships
- attributes
- domains

## Entities

Definition:

> Entities are things about which an organisation collects information.

eg. people, organisations, products, services, times, dates, locations, events, transactions, documents, quantities.

Recommended usage:

> **Entity instance** A (eg. Jane) is an instance of **entity** B (eg. Employee).

Alternative usages:

> Entity A is an instance of entity-type B.
>
> Object A is an instance of class B.

Entities are generally depicted as **rectangles** (perhaps with rounded corners) with their names inside.

**Entity definitions** are core Metadata for any data model, and should exhibit:
- clarity
- accuracy
- completeness

## Relationships

Definition:

> A relationship is an association between entities.

Relationships are generally depicted as (directed?) **lines** between entities, with their names as labels.

Relationships can have a **cardinality**:
- **one-to-one** – each A is associated with one B, and each B is associated with one A
  - [total functional, total injective] *exactly one to exactly one* – each A is associated with exactly one B, and each B is associated with exactly one A
  - [functional, total injective] *exactly one to no more than one* – each A is associated with zero or one B, and each B is associated with exactly one A
  - [total functional, injective] *no more than one to exactly one* – each A is associated with exactly one B, and each B is associated with zero or one A
  - [functional, injective] *no more than one to no more than one* – each A is associated with zero or one B, and each B is associated with zero or one A
- **one-to-many** – each A is associated with more than one B, but each B is associated with just one A
  -  [total injective] *exactly one to zero or more* – each A is associated with any number of B, and each B is associated with exactly one A
  -  [total injective] *exactly one to one or more* – each A is associated with at least one B, and each B is associated with exactly one A
  -  [total injective] *exactly one to more than one* – each A is associated with at least two B, and each B is associated with exactly one A
  -  [injective] *no more than one to zero or more* – each A is associated with any number of B, and each B is associated with at most one A
  -  [injective] *no more than one to one or more* – each A is associated with at least one B, and each B is associated with at most one A
  -  [injective] *no more than one to more than one* – each A is associated with at least two B, and each B is associated with at most one A
- **many-to-one** – each A is associated with one B, but each B is associated with more than one A
  - [total functional] *zero or more to exactly one* – each A is associated with exactly one B, and each B is associated with any number of B
  - [functional] *zero or more to no more than one* – each A is associated with at most one B, and each B is associated with any number of B
  - [total functional] *one or more to exactly one* – each A is associated with exactly one B, and each B is associated with at least one B
  - [functional] *one or more to no more than one* – each A is associated with at most one B, and each B is associated with at least one B
  - [total functional] *more than one to exactly one* – each A is associated with exactly one B, and each B is associated with at least two B
  - [functional] *more than one to no more than one* – each A is associated with at most one B, and each B is associated with at least two B
- **many-to-many** – each A is associated with more than one B, and each B is associated with more than one B
  - *zero or more to zero or more* – each A is associated with any number of B, and each B is associated with any number of A
  - *zero or more to one or more* – each A is associated with at least one B, and each B is associated with any number of A
  - *zero or more to more than one* – each A is associated with at least two B, and each B is associated with any number of A
  - *one or more to zero or more* – each A is associated with any number of B, and each B is associated with at least one A
  - *one or more to one or more* – each A is associated with at least one B, and each B is associated with at least one A
  - *one or more to more than one* – each A is associated with at least two B, and each B is associated with at least one A
  - *more than one to zero or more* – each A is associated with any number of B, and each B is associated with at least two A
  - *more than one to one or more* – each A is associated with at least one B, and each B is associated with at least two A
  - *more than one to more than one* – each A is associated with at least two B, and each B is associated with at least two A

Relationships have an **arity**:
- **unary** – both linked instances are of the same entity ie. the entity is associated with itself
- **binary** – the two linked instances are of distinct entities
- **ternary** – the relationship associates three entities with each other

Unary relationships are also known as ‘recursive’ or ‘self-referencing’:
- a one-to-many unary relationship is known as a ‘hierarchy’
- a many-to-many unary relationship is known as a ‘network’ or ‘graph’

## Attributes

Definition:

> An attribute is a property that identifies, describes or measures an entity.

Attributes are generally depicted as list within the entity rectangle.

### Identifiers

Construction-type keys

Function-type keys

Identifying vs. non-identifying relationships

## Domains

