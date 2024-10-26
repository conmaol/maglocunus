# Data modeling schemes

The six most common schemes to represent data (models) are:
- relational
  - Information Engineering (IE)
  - Integration Definition for Information Modeling (IDEF1X)
  - Barker Notation
  - Chen
- dimensional
- object-oriented
  - Unified Modeling Language (UML)
- fact-based
  - Object Role Modeling (ORM, ORM2)
- time-based
  - Data Vault
  - Anchor Modeling 
- noSQL
  - Document
  - Column
  - Graph
  - Key-Value


## Relational

Relational data models are optimised for operational/transactional systems, which require entering information quickly and having it stored accurately.

Here is an Information Engineering (IE) notation representation of a simple relational data model:

![a simple relational data model](images/dm-1.png)

This can be summarised as follows:

This can be expressed in first order logic as follows:
- Only students attend.
- Only courses are attended.
- Every student attends zero or more courses.
- Every course is attended by zero or more students.

In first order logic:
> `∀x. ∀y. attend(x,y) → student(x) & course(y)`

## Dimensional

Dimensional data models are optimised for querying and analysing large amounts of data.

![a dimensional data model](images/dm-8.png)

###### 1.3.4.2.1. Fact tables

###### 1.3.4.2.2. Dimensional tables

###### 1.3.4.2.3. Snowflaking

###### 1.3.4.2.4. Grain 

###### 1.3.4.2.5. Conformed dimensions

###### 1.3.4.2.5. Conformed facts

## Object-oriented (UML)

## Fact-based modeling (FBM) 

###### 1.3.4.4.1. Object-role modeling (ORM or ORM2)

###### 1.3.4.4.2. Fully communication oriented modeling (FCO-IM) 

## Time-based

###### 1.3.4.5.1. Data vault

###### 1.3.4.5.2. Anchor modeling 

## NoSQL

###### 1.3.4.6.1. Document

###### 1.3.4.6.2. Key-value

###### 1.3.4.6.3. Column-oriented

###### 1.3.4.6.4. Graph

