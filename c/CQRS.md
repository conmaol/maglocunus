# Command Query Responsibility Segregation

`Command Query Responsibility Segregation` (CQRS)


an architectural design paper that explicitly separates the read and write sides of an application

situations where read and write data models need to evolve independently, because reads and writes have fundamentally different performance and consistency requirements

write operations prioritise data integrity and consistency - enforcing relationships, validations and transactional safety

read operations are optimised for speed, filtering and formatting – flattening and denormalising to minimise joins and improve retrieval speed

```mermaid
flowchart TD
  customers([customers])
  analysts([analysts])
  command(["command handler"])
  customerQ([customer query handler])
  analystsQ([analytical query handler])
  commandDB[[command DB]]
  customerDB[[customer read DB]]
  analystDB[[analytical read DB]]
  customers -- "write to" --> command
  customers -- "read from" --> customerQ
  analysts -- "read from" --> analystsQ
  command -- "writes to" --> commandDB
  customerQ -- "reads from" --> customerDB
  analystsQ -- "reads from" --> analystDB
  model(["model updater"])
  model -- "reads from" --> commandDB
  model -- "writes to" --> customerDB
  model -- "writes to" --> analystDB
```


----

Back up to: [Maglocunus](../index.md)
