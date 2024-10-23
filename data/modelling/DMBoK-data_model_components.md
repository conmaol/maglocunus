# Data model components

This document contains my notes from Chapter 5 §1.3.3 of the *Data Management Body of Knowledge* 2nd edition (DAMA-DMBoK 2017).

[DMBoK ch 5 § 1.3.3]

Most data models contain the same basic building blocks:
- entities
- relationships
- attributes
- domains

## Entity

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

## Relationship

Definition:

> A relationship is an association between entities.

Relations are generally depicted as (directed?) **lines** between entities, with their names as labels.

For example, assuming the three entities `Student`, `Instructor` and `Course`, we can conceptualise of the following two relationships:
- `Attend` – associates `Student` and `Course`
- `Teach` – associates `Instructor` and `Course`

Relationships can have a **cardinality**:
- **one-to-one** – each A is associated with one B, and each B is associated with one A
  - *exactly one to exactly one* – each A is associated with exactly one B, and each B is associated with exactly one A
  - *exactly one to no more than one* – each A is associated with zero or one B, and each B is associated with exactly one A
  - *no more than one to exactly one* – each A is associated with exactly one B, and each B is associated with zero or one A
  - *no more than one to no more than one* – each A is associated with zero or one B, and each B is associated with zero or one A
- **one-to-many** – each A is associated with more than one B, but each B is associated with just one A
  -  *exactly one to zero or more* – each A is associated with any number of B, and each B is associated with exactly one A
  -  *exactly one to one or more* – each A is associated with at least one B, and each B is associated with exactly one A
  -  *exactly one to more than one* – each A is associated with a plurality of B, and each B is associated with exactly one A
  -  *no more than one to zero or more* – each A is associated with any number of B, and each B is associated with at most one A
  -  *no more than one to one or more* – each A is associated with at least one B, and each B is associated with at most one A
  -  *no more than one to more than one* – each A is associated with a plurality of B, and each B is associated with at most one A
- **many-to-one** – each A is associated with one B, but each B is associated with more than one A
  - mmm
- **many-to-many** – each A is associated with more than one B, and each B is associated with more than one B
  - mm



eg. each student attends zero or more courses, and each course is attended by zero or more students
 



### Arity of relationships

#### Unary (recursive) relationship

Domain and renge are same entity

#### Binary relationship

Domain and range are different

#### Ternary relationaship

Not just domain and range



### Foreign key

## Attribute

### Graphic representation of attributes

### Identifiers

Construction-type keys

Function-type keys

Identifying vs. non-identifying relationships

## Domain

