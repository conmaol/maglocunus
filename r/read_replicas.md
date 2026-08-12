# Read replicas

`Read replicas` are synchronised copies of a primary/leader database that are only used only for **read** operations (ie. `SELECT` queries). 

Having read replicas allows you to scale read-heavy workloads without overloading the primary database, with the trade-off that they may briefly return ‘stale’ data due to *replication lag*.



Here's a simple diagram:

```text
                Write (INSERT/UPDATE/DELETE)
                        |
                 +---------------+
                 | Primary DB    |
                 +---------------+
                   |     |     |
     Replication   |     |     |
        -----------+-----+-----+
                   |     |     |
             +---------+ +---------+ +---------+
             | Replica | | Replica | | Replica |
             | Read #1 | | Read #2 | | Read #3 |
             +---------+ +---------+ +---------+
                  |           |            |
               Reads       Reads        Reads
```

### How they work

1. Your application sends all **writes** (inserts, updates, deletes) to the primary database.
2. The primary records those changes.
3. The changes are replicated to one or more read replicas.
4. Applications can send read queries to any replica.

### Why use read replicas?

* **Scale read performance**

  * If your application has many more reads than writes, replicas distribute the load.
* **Improve response times**

  * Users can query different replicas instead of competing for the primary.
* **Run reporting queries**

  * Heavy analytics can execute on a replica without slowing production writes.
* **Geographic distribution**

  * Place replicas closer to users in different regions to reduce latency.

### Example

Imagine an e-commerce site:

* 10,000 customers browsing products every minute (reads)
* 100 customers placing orders every minute (writes)

Instead of making the primary handle all 10,100 requests:

* Browsing (`SELECT`) goes to replicas.
* Orders (`INSERT`, `UPDATE`) go to the primary.

This greatly reduces load on the primary.

### One important limitation: replication lag

Replication is often **asynchronous**, meaning replicas may be a little behind the primary.

For example:

```
Time 0:
User updates email address.

Primary:
email = alice@example.com

Replica:
email = old@example.com   <-- hasn't caught up yet
```

If the user immediately performs a read against the replica, they might briefly see stale data.

This delay is called **replication lag**, and it can range from milliseconds to seconds (or longer under heavy load).

### When not to use a read replica

Avoid reading from a replica when you require the **most up-to-date data**, such as:

* Immediately after a user updates their profile
* Checking inventory before placing an order
* Financial transactions
* Authentication or security-sensitive operations

In these cases, read from the primary.

### Read replica vs. backup

| Read Replica         | Backup                           |
| -------------------- | -------------------------------- |
| Live database        | Snapshot of data                 |
| Accepts read queries | Not used for application queries |
| Continuously updated | Taken periodically               |
| Helps with scaling   | Helps with recovery              |

### Read replica vs. failover replica

A read replica is **primarily for scaling reads**. It is not automatically the new primary if the primary fails (though some database systems allow promoting a replica manually or automatically).

A **failover replica** is intended for **high availability**, where it can take over as the primary during an outage.

### Popular database support

Many databases support read replicas, including:

* MySQL
* PostgreSQL
* MariaDB
* SQL Server
* Oracle Database
* Managed cloud services like Amazon RDS, Google Cloud SQL, and Azure Database services

In short, **read replicas let you scale read-heavy workloads by maintaining synchronized copies of your primary database**, with the trade-off that they may briefly return stale data due to replication lag.


Sources:
- Chapter 3 ‘Architecting read-side data’ of *Data Architecture* by Pramos Sadalage & Premanand Chandrasekaran (O’Reilly 2026)


----

Back up to: [Maglocunus](../index.md)

